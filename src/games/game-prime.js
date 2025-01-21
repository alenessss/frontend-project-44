import { getAnswer } from '../index.js';
import {getRandomNumber} from '../utils.js'

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const getCorrectAnswer = (num) => (isPrime(num) ? 'yes' : 'no');

const findTheAnswer = () => {
  const question = getRandomNumber(1, 100);
  const userAnswer = getCorrectAnswer(question);

  return [userAnswer, question];
};

const exercise = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  getAnswer(findTheAnswer, exercise);
};
