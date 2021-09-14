const maxValue = 100;
const minValue = 0;
const increment = 20;

export const incrementAction = {
  type: 'increment',
  payload: {maxValue, increment},
};

export const decrementAction = {
  type: 'decrement',
  payload: {minValue, increment},
};
