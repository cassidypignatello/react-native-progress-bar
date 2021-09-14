import {MAX_VALUE, MIN_VALUE, INCREMENT} from './constants';

export const incrementAction = {
  type: 'increment',
  payload: {maxValue: MAX_VALUE, increment: INCREMENT},
};

export const decrementAction = {
  type: 'decrement',
  payload: {minValue: MIN_VALUE, increment: INCREMENT},
};
