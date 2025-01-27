import { runGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const lengthProgression = 10;

const createArithmeticProgression = (start, difference) => {
  const progression = [];
  for (let i = 0; i < lengthProgression; i += 1) {
    progression.push(start + i * difference);
  }
  return progression;
};

const formingResponse = () => {
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
  runGame(formingResponse, exercise);
};
