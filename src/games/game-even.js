import { runGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

// Првоерим число на четность
const isEven = (number) => (number % 2 === 0);

const findTheAnswer = () => {
  const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');
  const question = getRandomNumber(1, 100);
  const userAnswer = String(getCorrectAnswer(question));

  return [userAnswer, question];
};

const exercise = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  runGame(findTheAnswer, exercise);
};
