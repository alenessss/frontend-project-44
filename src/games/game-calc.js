import { getAnswer } from '../index.js';
import { getRandomNumber, getRandomSign } from '../utils.js';

const calculate = (numberOne, numberTwo, symbol) =>{
  if (symbol === '*') {
    return numberOne * numberTwo;
  } else if (symbol === '+') {
    return numberOne + numberTwo;
  } else if (symbol === '-') {
    return numberOne - numberTwo;
  }
}

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
  getAnswer(findTheAnswer, exercise);
};
