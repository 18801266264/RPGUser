var Cache: MethodDecorator = (target: any, propertyName, desc: PropertyDescriptor) => {
    const getter = desc.get;
    desc.get = function () {
        var cacheKey = "_cache" + propertyName;
        return getter.apply(this);
        // if (this["cacheKey"] != null) {
        //     return target["cacheKey"];
        // } else {
        //     this["cacheKey"] = getter.apply(this);
        //     return target["cacheKey"];
        // }
    }
    return desc;
}

class User {
    cash = 100;
    gold = 100;
    exp = 0;
    totalExp = 100;
    level = 1;
    heroes: Hero[] = [];
    //  _heroesInTeam: Hero[] = [];

    constructor(cash: number, gold: number, exp: number, totalExp: number, level: number, heroes: Hero[]) {
        this.cash = cash;
        this.gold = gold;
        this.exp = exp;
        this.totalExp = totalExp;
        this.level = level;
        this.heroes = heroes;
    }

    get heroesInTeam() {
        return this.heroes.filter(hero => hero.isInTeam);
    }

    @Cache
    get fightPower() {
        return this.getFightPower();
    }

    getFightPower() {
        var result = 0;
        this.heroesInTeam.forEach(hero => result += hero.getFightPower());
        // result += this.heroesInTeam.fightPower;
        return result;
    }
}

class Hero {
    isInTeam: boolean = false;
    hp = 50;
    level = 1;
    quality: number = 2.8;
    equipments: Equipment[] = [];

    constructor(isInTeam: boolean, hp: number, level: number, quality: number, equipments: Equipment[]) {
        this.isInTeam = isInTeam;
        this.hp = hp;
        this.level = level;
        this.quality = quality;
        this.equipments = equipments;
    }

    get maxHp() {
        return this.level * 100 * this.quality;
    }

    get attack() {
        var result = 100;
        this.equipments.forEach(e => result += e.fightPower);
        return result;
    }

    @Cache
    get fightPower() {
        return this.getFightPower();
    }

    getFightPower() {
        return this.maxHp * 1.5 + this.attack * 1.8;
    }
}

class Equipment {
    level = 1;
    quality = 2.8;
    jewels: Jewel[] = [];

    constructor(level: number, quality: number, jewels: Jewel[]) {
        this, level = level;
        this.quality = quality;
        this.jewels = jewels;
    }

    get equipmentSelfPower() {
        return this.level * 50 * this.quality;
    }

    get jewelPower() {
        var result = 50;
        this.jewels.forEach(e => result += e.fightPower);
        return result;
    }

    @Cache
    get fightPower() {
        return this.getFightPower();
    }

    getFightPower() {
        return this.equipmentSelfPower * 1.8 + this.jewelPower * 1.5;
    }
}

class Jewel {
    level = 1;
    quality: number = 2.8;

    constructor(level: number, quality: number) {
        this.level = level;
        this.quality = quality;
    }

    @Cache
    get fightPower() {
        return this.getFightPower();
    }

    getFightPower() {
        return this.level * 10 * this.quality;
    }
}