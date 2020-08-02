export const getRandomNumber = (max = 10, min = 1) =>
  Math.floor(Math.random() * max) + min;
