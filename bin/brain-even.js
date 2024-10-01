#!/usr/bin/env node
import readlineSync from 'readline-sync';
import СreatMainArchitect, { name, getRandomNumber } from '../src/index.js';

СreatMainArchitect();

// Првоерим число на четность
const isEven = (number) => (number % 2 === 0);
// Находим правильный ответ
const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const RepeatQuestion = () => {
  for (let step = 0; step < 3; step += 1) {
    const num = getRandomNumber(1, 100);
    const correctAnswer = getCorrectAnswer(num);

    console.log(`Question: ${num}`);
    const answer = readlineSync.question('Your answer: ');
    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (step === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};
RepeatQuestion();
