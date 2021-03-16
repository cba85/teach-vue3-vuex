export const addNumber = (state, number) => {
  state.numbers.push(number);
};

export const addRandomNumber = (state, { min, max }) => {
  const randomNumber = Math.floor(Math.random() * (max - min) + 1);
  state.numbers.push(randomNumber);
};
