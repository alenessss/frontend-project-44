import { GetWelcome } from '../index.js';

// Выдает рандомное число
const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min + 1;
// Првоерим число на четность
const isEven = (number) => (number % 2 === 0);
// Находим правильный ответ
const getCorrectAnswer = (number) => (isEven(number) ? 'yes' : 'no');

const FindTheAnswer = () => {
  const question = getRandomNumber(1, 100);
  const UserAnswer = getCorrectAnswer(question);

  return [UserAnswer, question];
};

const exercise = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  GetWelcome(FindTheAnswer, exercise);
};
