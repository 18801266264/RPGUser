var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Cache = function (target, propertyName, desc) {
    var getter = desc.get;
    desc.get = function () {
        var cacheKey = "_cache" + propertyName;
        return getter.apply(this);
        // if (this["cacheKey"] != null) {
        //     return target["cacheKey"];
        // } else {
        //     this["cacheKey"] = getter.apply(this);
        //     return target["cacheKey"];
        // }
    };
    return desc;
};
var User = (function () {
    //  _heroesInTeam: Hero[] = [];
    function User(cash, gold, exp, totalExp, level, heroes) {
        this.cash = 100;
        this.gold = 100;
        this.exp = 0;
        this.totalExp = 100;
        this.level = 1;
        this.heroes = [];
        this.cash = cash;
        this.gold = gold;
        this.exp = exp;
        this.totalExp = totalExp;
        this.level = level;
        this.heroes = heroes;
    }
    var d = __define,c=User,p=c.prototype;
    d(p, "heroesInTeam"
        ,function () {
            return this.heroes.filter(function (hero) { return hero.isInTeam; });
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.getFightPower();
        }
    );
    p.getFightPower = function () {
        var result = 0;
        this.heroesInTeam.forEach(function (hero) { return result += hero.getFightPower(); });
        // result += this.heroesInTeam.fightPower;
        return result;
    };
    __decorate([
        Cache
    ], p, "fightPower", null);
    return User;
}());
egret.registerClass(User,'User');
var Hero = (function () {
    function Hero(isInTeam, hp, level, quality, equipments) {
        this.isInTeam = false;
        this.hp = 50;
        this.level = 1;
        this.quality = 2.8;
        this.equipments = [];
        this.isInTeam = isInTeam;
        this.hp = hp;
        this.level = level;
        this.quality = quality;
        this.equipments = equipments;
    }
    var d = __define,c=Hero,p=c.prototype;
    d(p, "maxHp"
        ,function () {
            return this.level * 100 * this.quality;
        }
    );
    d(p, "attack"
        ,function () {
            var result = 100;
            this.equipments.forEach(function (e) { return result += e.fightPower; });
            return result;
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.getFightPower();
        }
    );
    p.getFightPower = function () {
        return this.maxHp * 1.5 + this.attack * 1.8;
    };
    __decorate([
        Cache
    ], p, "fightPower", null);
    return Hero;
}());
egret.registerClass(Hero,'Hero');
var Equipment = (function () {
    function Equipment(level, quality, jewels) {
        this.level = 1;
        this.quality = 2.8;
        this.jewels = [];
        this, level = level;
        this.quality = quality;
        this.jewels = jewels;
    }
    var d = __define,c=Equipment,p=c.prototype;
    d(p, "equipmentSelfPower"
        ,function () {
            return this.level * 50 * this.quality;
        }
    );
    d(p, "jewelPower"
        ,function () {
            var result = 50;
            this.jewels.forEach(function (e) { return result += e.fightPower; });
            return result;
        }
    );
    d(p, "fightPower"
        ,function () {
            return this.getFightPower();
        }
    );
    p.getFightPower = function () {
        return this.equipmentSelfPower * 1.8 + this.jewelPower * 1.5;
    };
    __decorate([
        Cache
    ], p, "fightPower", null);
    return Equipment;
}());
egret.registerClass(Equipment,'Equipment');
var Jewel = (function () {
    function Jewel(level, quality) {
        this.level = 1;
        this.quality = 2.8;
        this.level = level;
        this.quality = quality;
    }
    var d = __define,c=Jewel,p=c.prototype;
    d(p, "fightPower"
        ,function () {
            return this.getFightPower();
        }
    );
    p.getFightPower = function () {
        return this.level * 10 * this.quality;
    };
    __decorate([
        Cache
    ], p, "fightPower", null);
    return Jewel;
}());
egret.registerClass(Jewel,'Jewel');
//# sourceMappingURL=Hero.js.map