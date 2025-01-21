import { getAnswer } from '../index.js';
import { getRandomNumber } from '../utils.js';

const createArithmeticProgression = (start, difference, length = 10) => {
  const progression = [];
  for (let i = 0; i < length; i += 1) {
    progression.push(start + i * difference);
  }
  return progression;
};

const findTheAnswer = () => {
  const start = getRandomNumber(1, 100);
  const difference = getRandomNumber(1, 10);
  const i = getRandomNumber(1, 10);
  const answer = createArithmeticProgression(start, difference);
  const userAnswer = String(answer[i]);
  answer[i] = '..';
  const question = answer.join(' ');
  return [userAnswer, question];
};

const exercise = 'What number is missing in the progression?';

export default () => {
  getAnswer(findTheAnswer, exercise);
};
