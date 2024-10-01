import readlineSync from 'readline-sync';

export const GetName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  return name;
};

export const GetWelcome = (FindTheAnswer, exercise) => {
  const name = GetName();
  console.log(`Hello, ${name}!`);
  console.log(exercise);

  for (let step = 0; step < 3; step += 1) {
    const questionAnswer = FindTheAnswer();

    const answer = String(questionAnswer[0]);
    const question = questionAnswer[1];

    console.log(`Question: ${question}`);

    const UserAnswer = readlineSync.question('Your answer: ');

    if (UserAnswer !== answer) {
      console.log(`'${UserAnswer}' is wrong answer ;(. Correct answer was '${answer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
