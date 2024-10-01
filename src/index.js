import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const name = readlineSync.question('May I have your name? ');

export default () => {
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
};

// Выдает рандомное число
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min + 1;

export { name };

export { getRandomNumber };
