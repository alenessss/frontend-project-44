#!/usr/bin/env node
import readlineSync from 'readline-sync';
import СreatMainArchitect, { name, getRandomNumber } from '../src/index.js';

СreatMainArchitect();

// Выдает случайный знак
const GetRandomSign = () => {
  const sign = ['+', '-', '*'];
  const i = sign[Math.floor(Math.random() * sign.length)];
  return i;
};

const FindTheAnswer = () => {
  for (let step = 0; step < 3; step += 1) {
    const NumberOne = getRandomNumber(1, 100);
    const NumberTwo = getRandomNumber(1, 100);
    const Symbol = GetRandomSign(3);
    console.log(`Question: ${NumberOne} ${Symbol} ${NumberTwo}`);

    let sum = 0;
    if (Symbol === '*') {
      sum = NumberOne * NumberTwo;
    } else if (Symbol === '+') {
      sum = NumberOne + NumberTwo;
    } else if (Symbol === '-') {
      sum = NumberOne - NumberTwo;
    }
    const answer = readlineSync.question('Your answer: ');
    if (Number(answer) === sum) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${sum}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (step === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
FindTheAnswer();
