import { runGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const findGcd = (number1, number2) => {
  if (number2 !== 0) {
    const c = number1 % number2;
    return findGcd(number2, c);
  }
  return number1;
};

const findTheAnswer = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const userAnswer = String(findGcd(number1, number2));

  return [userAnswer, question];
};

const exercise = 'Find the greatest common divisor of given numbers.';

export default () => {
  runGame(findTheAnswer, exercise);
};
