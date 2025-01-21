import { getAnswer } from '../index.js';

// Выдает рандомное число
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min + 1;

const findNod = (number1, number2) => {
  if (number2 !== 0) {
    const c = number1 % number2;
    return findNod(number2, c);
  }
  return number1;
};

const findTheAnswer = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const userAnswer = findNod(number1, number2);

  return [userAnswer, question];
};

const exercise = 'Find the greatest common divisor of given numbers.';

export default () => {
  getAnswer(findTheAnswer, exercise);
};
