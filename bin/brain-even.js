#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Answer "yes" if the number is even, otherwise answer "no".');

// Выдает рандомное число
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min + 1;

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
      break;
    }
    if (step === 2) {
      console.log('Congratulations');
    }
  }
};
RepeatQuestion();
