import readlineSync from 'readline-sync';

export const getName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const getAnswer = (findTheAnswer, exercise) => {
  const name = getName();
  console.log(`Hello, ${name}!`);
  console.log(exercise);

  for (let step = 0; step < 3; step += 1) {
    const questionAnswer = findTheAnswer();

    const answer = String(questionAnswer[0]);
    const question = questionAnswer[1];

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
