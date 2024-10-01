import { GetWelcome } from '../index.js';

// Выдает рандомное число
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min + 1;

// Выдает случайный знак
const GetRandomSign = () => {
  const sign = ['+', '-', '*'];
  const i = sign[Math.floor(Math.random() * sign.length)];
  return i;
};

const FindTheAnswer = () => {
  const NumberOne = getRandomNumber(1, 100);
  const NumberTwo = getRandomNumber(1, 100);
  const Symbol = GetRandomSign(3);
  const question = `${NumberOne} ${Symbol} ${NumberTwo}`;

  let UserAnswer = 0;
  if (Symbol === '*') {
    UserAnswer = NumberOne * NumberTwo;
  } else if (Symbol === '+') {
    UserAnswer = NumberOne + NumberTwo;
  } else if (Symbol === '-') {
    UserAnswer = NumberOne - NumberTwo;
  }
  return [UserAnswer, question];
};

const exercise = 'What is the result of the expression?';

export default () => {
  GetWelcome(FindTheAnswer, exercise);
};
