import { GetWelcome } from '../index.js';

const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min + 1;

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

const FindTheAnswer = () => {
  const question = getRandomNumber(1, 100);
  const UserAnswer = getCorrectAnswer(question);

  return [UserAnswer, question];
};

const exercise = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  GetWelcome(FindTheAnswer, exercise);
};
