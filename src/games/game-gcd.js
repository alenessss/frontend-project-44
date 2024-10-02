import { GetWelcome } from '../index.js';

// Выдает рандомное число
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min + 1;

const FindNod = (number1, number2) => {
  if (number2 !== 0) {
    const c = number1 % number2;
    return FindNod(number2, c);
  }
  return number1;
};

const FindTheAnswer = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const UserAnswer = FindNod(number1, number2);

  return [UserAnswer, question];
};

const exercise = 'Find the greatest common divisor of given numbers.';

export default () => {
  GetWelcome(FindTheAnswer, exercise);
};
