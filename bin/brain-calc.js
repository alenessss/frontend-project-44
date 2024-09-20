#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');

const name = readlineSync.question('May I have your name? ');
console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');

// Выдает рандомное число
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min + 1;

// Выдает случайный знак
const GetRandomSign = (sign) => {
  sign = ['+', '-', '*'];
  const i = sign[Math.floor(Math.random() * sign.length)];
  console.log(i);
};

GetRandomSign();
