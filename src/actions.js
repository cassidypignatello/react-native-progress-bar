const maxValue = 100;
const minValue = 0;

export const incrementAction = {
  type: 'increment',
  payload: {maxValue},
};

export const decrementAction = {
  type: 'decrement',
  payload: {minValue},
};
