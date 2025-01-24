import { runGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

export const getRandomSign = () => {
  const sign = ['+', '-', '*'];
  const i = sign[Math.floor(Math.random() * sign.length)];
  return i;
};

const calculate = (numberOne, numberTwo, symbol) => {
  if (symbol === '*') {
    return numberOne * numberTwo;
  }
  if (symbol === '+') {
    return numberOne + numberTwo;
  }
  if (symbol === '-') {
    return numberOne - numberTwo;
  }
  return null;
};

const findTheAnswer = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const symbol = getRandomSign(3);
  const question = `${numberOne} ${symbol} ${numberTwo}`;
  const correctAnswer = String(calculate(numberOne, numberTwo, symbol));
  return [correctAnswer, question];
};

const exercise = 'What is the result of the expression?';

export default () => {
  runGame(findTheAnswer, exercise);
};
