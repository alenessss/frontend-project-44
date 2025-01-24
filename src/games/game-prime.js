import { runGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const findTheAnswer = () => {
  const getCorrectAnswer = (num) => (isPrime(num) ? 'yes' : 'no');
  const question = getRandomNumber(1, 100);
  const userAnswer = String(getCorrectAnswer(question));

  return [userAnswer, question];
};

const exercise = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  runGame(findTheAnswer, exercise);
};
