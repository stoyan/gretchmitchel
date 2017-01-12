const names = [
  'Alvarez',
  'Ampeg',
  'Aria',
  'Benedetto',
  'Bigsby',
  'Bogner',
  'Bugera',
  'Carvin',
  'Cordoba',
  'Dean',
  'Epiphone',
  'Fender',
  'Fernandes',
  'Fullerton',
  'George',
  'Gibson',
  'Gitano',
  'Godin',
  'Gretch',
  'Guild',
  'Hamer',
  'Hohner',
  'Ibanez',
  'Jackson',
  'Kramer',
  'Kremona',
  'Laney',
  'Leo',
  'Les',
  'Lucero',
  'Luna',
  'Marshall',
  'Martin',
  'Mesa',
  'Mitchell',
  'Ovation',
  'Paul',
  'Peavey',
  'Peerless',
  'Reed',
  'Rich',
  'Rickenbacker',
  'Samick',
  'Schecter',
  'Seagull',
  'Smith',
  'Strat',
  'Takamine',
  'Taylor',
  'Tele',
  'Vox',
  'Washburn',
];

function getRandomInt(min, max) { // thanks MDN!
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function one() {
  return names[getRandomInt(0, names.length - 1)];
}

function two() {
  return one() + ' ' + one();
}

// export {two};
module.exports = two;


/*
console.log(two());

$ node names.js 
Gitano Schecter
$ node names.js 
Taylor Kremona
$ node names.js 
Gretch Mitchell
$ node names.js 
Fullerton George
$ node names.js 
Carvin Seagull
*/