import { getAnswer } from '../index.js';

// Выдает рандомное число
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min + 1;

// Выдает случайный знак
const getRandomSign = () => {
  const sign = ['+', '-', '*'];
  const i = sign[Math.floor(Math.random() * sign.length)];
  return i;
};

const findTheAnswer = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const symbol = getRandomSign(3);
  const question = `${numberOne} ${symbol} ${numberTwo}`;

  let userAnswer = 0;
  if (symbol === '*') {
    userAnswer = numberOne * numberTwo;
  } else if (symbol === '+') {
    userAnswer = numberOne + numberTwo;
  } else if (symbol === '-') {
    userAnswer = numberOne - numberTwo;
  }
  return [userAnswer, question];
};

const exercise = 'What is the result of the expression?';

export default () => {
  getAnswer(findTheAnswer, exercise);
};
