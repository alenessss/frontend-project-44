import { runGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const sign = ['+', '-', '*'];

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

const formingResponse = () => {
  const numberOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const symbol = sign[( getRandomNumber(-1, sign.length-1))];;
  const question = `${numberOne} ${symbol} ${numberTwo}`;
  const correctAnswer = String(calculate(numberOne, numberTwo, symbol));
  return [correctAnswer, question];
};

const exercise = 'What is the result of the expression?';

export default () => {
  runGame(formingResponse, exercise);
};
