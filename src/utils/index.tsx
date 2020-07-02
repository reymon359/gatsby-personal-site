export const getRandom = (max = 10, min = 1) =>
  Math.floor(Math.random() * max) + min;

export const getRandomColor = () =>'#' + ('00000'+(Math.random()*(1<<24)|0).toString(16)).slice(-6);

export const getRandomBackground = () => {
  let background = [];
  for (let i = 0; i < getRandom(); i++) {
    background.push(`
      radial-gradient(
        circle at ${getRandom(100)}% ${getRandom(100)}%,
        ${getRandomColor() + '0d'},
        transparent ${getRandom(100, 60)}%
      )
  `);
  }
  return background.join(',');
};
