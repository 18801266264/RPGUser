# RPGUser

## 结构：一共有四层结构，分别是用户，英雄，装备和宝石
### 用户：有经验、等级、和所属英雄等属性，用户战斗力=所有在队伍中的英雄的战斗力之和
### 英雄：基础属性为等级和品质，英雄最大生命值=等级 * 品质 * 100，攻击力=所有装备战斗力之和，英雄的总战斗力=最大生命值 * 1.5+攻击力 * 1.8
### 装备：基础属性为等级和品质，装备自身战斗力=等级 * 品质 * 50，宝石附加战斗力=所有宝石战斗力只和，装备的总战力=装备自身战斗力 * 1.8+宝石战斗力 * 1.5
### 宝石：基础属性为等级和品质，宝石自身战斗力=等级 * 品质 * 10
