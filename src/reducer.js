const initialState = {
  progress: 30,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment': {
      const {maxValue, increment} = action.payload;
      const nextValue = state.progress + increment;
      return nextValue < maxValue
        ? {
            ...state,
            progress: nextValue,
          }
        : {...state, progress: maxValue};
    }
    case 'decrement': {
      const {minValue, increment} = action.payload;
      const nextValue = state.progress - increment;
      return nextValue > minValue
        ? {
            ...state,
            progress: nextValue,
          }
        : {...state, progress: minValue};
    }
    default:
      return state;
  }
}
