import readlineSync from 'readline-sync';
const stepNumberWin = 3;

export const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const runGame = (findTheAnswer, exercise) => {
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log(exercise);
  for (let step = 0; step < stepNumberWin; step += 1) {
    const [answer, question] = findTheAnswer();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== answer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
