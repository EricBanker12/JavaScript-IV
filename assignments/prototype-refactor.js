/*
  Object oriented design is commonly used in video games.  For this part of the assignment you will be implementing several constructor functions with their correct inheritance hierarchy.

  In this file you will be creating three constructor functions: GameObject, CharacterStats, Humanoid.  

  At the bottom of this file are 3 objects that all end up inheriting from Humanoid.  Use the objects at the bottom of the page to test your constructor functions.
  
  Each constructor function has unique properties and methods that are defined in their block comments below:
*/
  
/*
  === GameObject ===
  * createdAt
  * name
  * dimensions (These represent the character's size in the video game)
  * destroy() // prototype method that returns: `${this.name} was removed from the game.`
*/
const GameObject = function(obj) {
    for (let key of ['createdAt', 'name', 'dimensions']) {
        this[key] = obj[key]
    }
}

GameObject.prototype.destroy = function() {return `${this.name} was removed from the game.`}

/*
  === CharacterStats ===
  * healthPoints
  * takeDamage() // prototype method -> returns the string '<object name> took damage.'
  * should inherit destroy() from GameObject's prototype
*/
const CharacterStats = function(obj) {
    GameObject.call(this, obj)
    for (let key of ['healthPoints']) {
        this[key] = obj[key]
    }
}

CharacterStats.prototype = Object.create(GameObject.prototype)
CharacterStats.prototype.takeDamage = function() {return `${this.name} took damage.`}

/*
  === Humanoid (Having an appearance or character resembling that of a human.) ===
  * team
  * weapons
  * language
  * greet() // prototype method -> returns the string '<object name> offers a greeting in <object language>.'
  * should inherit destroy() from GameObject through CharacterStats
  * should inherit takeDamage() from CharacterStats
*/

const Humanoid = function(obj) {
    CharacterStats.call(this, obj)
    for (let key of ['team', 'weapons', 'language']) {
        this[key] = obj[key]
    }
}

Humanoid.prototype = Object.create(CharacterStats.prototype)
Humanoid.prototype.greet = function() {return `${this.name} offers a greeting in ${this.language}.`}
 
/*
  * Inheritance chain: GameObject -> CharacterStats -> Humanoid
  * Instances of Humanoid should have all of the same properties as CharacterStats and GameObject.
  * Instances of CharacterStats should have all of the same properties as GameObject.
*/

// Test you work by un-commenting these 3 objects and the list of console logs below:


  const mage = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 1,
      height: 1,
    },
    healthPoints: 5,
    name: 'Bruce',
    team: 'Mage Guild',
    weapons: [
      'Staff of Shamalama',
    ],
    language: 'Common Tongue',
  });

  const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

  const archer = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 2,
      height: 4,
    },
    healthPoints: 10,
    name: 'Lilith',
    team: 'Forest Kingdom',
    weapons: [
      'Bow',
      'Dagger',
    ],
    language: 'Elvish',
  });

  console.log(mage.createdAt); // Today's date
  console.log(archer.dimensions); // { length: 1, width: 2, height: 4 }
  console.log(swordsman.healthPoints); // 15
  console.log(mage.name); // Bruce
  console.log(swordsman.team); // The Round Table
  console.log(mage.weapons); // Staff of Shamalama
  console.log(archer.language); // Elvish
  console.log(archer.greet()); // Lilith offers a greeting in Elvish.
  console.log(mage.takeDamage()); // Bruce took damage.
  console.log(swordsman.destroy()); // Sir Mustachio was removed from the game.


  // Stretch task: 
  // * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.  
  // * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
  // * Create two new objects, one a villain and one a hero and fight it out with methods!

  // Villain
  const Villain = function(obj) {
      Humanoid.call(this, obj)
  }
  Villain.prototype = Object.create(Humanoid.prototype)
  Villain.prototype.slap = function(target) {
      target.healthPoints -= Math.floor(1 + Math.random() * 3) // 1 to 3
      return target.healthPoints > 0 ? target.takeDamage() : target.destroy()
  }

  // Hero
  const Hero = function(obj) {
      Humanoid.call(this, obj)
  }
  Hero.prototype = Object.create(Humanoid.prototype)
  Hero.prototype.slap = function(target) {
      target.healthPoints -= Math.floor(1 + Math.random() * 5) // 1 to 5
      return target.healthPoints > 0 ? target.takeDamage() : target.destroy()
  }

  // Tom
  const tom = new Villain({
    createdAt: new Date(),
    dimensions: {
      length: 4,
      width: 1,
      height: 2,
    },
    healthPoints: 9,
    name: 'Tom',
    team: 'Cat',
    weapons: ['Claws'],
    language: 'meows',
  })

  // Jerry
  const jerry = new Hero({
    createdAt: new Date(),
    dimensions: {
      length: 1,
      width: 1,
      height: 1,
    },
    healthPoints: 13,
    name: 'Jerry',
    team: 'Mouse',
    weapons: [
        'Piano',
        'Anvil',
        'Baseball Bat',
        'Dog'
    ],
    language: 'squeaks',
  })

  // Fight!
  console.log('\nFight!')
  console.log(jerry.greet())
  console.log(tom.greet())
  while (jerry.healthPoints > 0 && tom.healthPoints > 0) {
    console.log(tom.slap(jerry))
    if (jerry.healthPoints > 0) console.log(jerry.slap(tom))
  }