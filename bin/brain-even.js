#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

// Выдает рандомное число
const getRandomNumber = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};
// запишим рандомное число в переменную
let numm;
numm = getRandomNumber(1, 100);

console.log(`Question: ${numm}`);

// Првоерим число на четность
const even_or_odd = (numm) => {
  let word;
  if (numm % 2 === 0) {
    word = 'yes';
    return word;
  }
  word = 'no';
  return word;
};
let EvenOrOdd;
EvenOrOdd = even_or_odd(numm);

// Дает ответ пользователь
const GetQuestion = () => {
  const answer = readlineSync.question('Your answer: ');
  if (answer === EvenOrOdd) {
    console.log('Correct!');
  } else {
    console.log(`${answer} is wrong answer ;(. Correct answer was ${EvenOrOdd}.`);
    // console.log("Let's try again, "+name+"!")
  }
};

GetQuestion();
