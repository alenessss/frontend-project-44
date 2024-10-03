import { GetWelcome } from '../index.js';

const createArithmeticProgression = (start, difference, length) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * difference);
  }
  return progression;
};

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min + 1;

const FindTheAnswer = () => {
  const start = getRandomNumber(1, 100);
  const difference = getRandomNumber(1, 10);
  const length = getRandomNumber(5, 10);
  const i = getRandomNumber(1, length);
  const answer = createArithmeticProgression(start, difference, length);
  const UserAnswer = answer[i];
  answer[i] = '..';
  const question = answer.join(' ');
  return [UserAnswer, question];
};

const exercise = 'What number is missing in the progression?';

export default () => {
  GetWelcome(FindTheAnswer, exercise);
};
