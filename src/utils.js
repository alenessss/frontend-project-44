export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min + 1;

export const getRandomSign = () => {
    const sign = ['+', '-', '*'];
    const i = sign[Math.floor(Math.random() * sign.length)];
    return i;
  };