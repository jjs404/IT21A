class Hero {
    #health;

    constructor (name,health,attack) {
    
    this.name = name;
    this.#health = health;
    this.attack = attack;
    this.Items = [];
    }

    getHealth() {
        return this.#health;
    }

    getName() {
        console.log(thisi.name);
    }

    getAttack() {
        console.log(this.attack);
    }

    getStats() {
        console.log("Name: " + this.name);
        console.log("Health: " + this.health);
        console.log("Attack: " + this.attack);
    }

    getItem() {
        this.Items.push(item);
    }

    totalAttack() {
        return this.attack + this.Items.reduce((sum,i)=>sum,i.bonusAttack,0);
    }


}
    class Warrior extends Hero {
        useAbility(){
            console.log(`${this.name} uses power Strike!`);
        }
    }

    class Mage extends Hero {
        constructor(name,health,attack,mana){
            super(name,health,attack);
            this.mana = mana;
        }
        useAbility(){
            console.log(`${this.name} cast Fireball!`);
        }
    }

    class Items {
        constructor(name,bonusAttack) {
            this.name = name;
            this.bonusAttack = bonusAttack;
        }
    }

const sword = new Items("Sword",5);
const staff = new Items("Staff",3);



const Warrior1 = new Warrior ("Clark",100,10);
Warrior1.getName();
Warrior1.getAttack();
Warrior1.getItem();
console.log(Clark.totalAttack());

// const mage = new Mage("Tion",80,8,50);
// mage.useAbility();

// const Gandalf = new Warrior ("Clark",100,10);
// // Gandalf.useAbility();
// Gandalf.getStats();

function performAbility(Hero) {
    console.log("\n");
    Hero.useAbility
} 


function performAbility(Hero) {
    Hero.useAbility();
}

performAbility(Warrior1);
performAbility(Gandalf);