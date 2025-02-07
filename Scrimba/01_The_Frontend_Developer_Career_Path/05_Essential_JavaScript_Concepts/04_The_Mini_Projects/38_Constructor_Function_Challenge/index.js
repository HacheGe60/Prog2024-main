/* const gamer = {
   name: 'Dave',
   score: 0,
   incrementScore: function () {
      this.score++;
   }
}; */

/* function Gamer(name) {
   this.name = name;
   this.score = 0;
   this.incrementScore = function () {
      this.score++;
   };
}

const dave = new Gamer('Dave', 0);
const sarah = new Gamer('Sarah', 0);
const kerry = new Gamer('Kerry', 0);
dave.incrementScore();
sarah.incrementScore();
sarah.incrementScore();
kerry.incrementScore();
kerry.incrementScore();
kerry.incrementScore();
console.log(dave);
console.log(sarah);
console.log(kerry); */

function Character(name) {
   this.name = name;
   this.collectedItemsArr = [];
   this.addItem = function (item) {
      this.collectedItemsArr.push(item);
      console.log(`${this.name} now has: ${this.collectedItemsArr.join(', ')}`);
   };
}

const wizard = new Character('Merlin');
const witch = new Character('Hermione');
wizard.addItem('wand');
wizard.addItem('map');
wizard.addItem('potion');
witch.addItem('sword');
witch.addItem('cloak of invisibility');