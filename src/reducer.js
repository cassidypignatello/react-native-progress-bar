const initialState = {
  progress: 30,
};

export default function appReducer(state = initialState, action) {
  switch (action.type) {
    case 'increment': {
      return {
        ...state,
        progress: state.progress + 20,
      };
    }
    case 'decrement': {
      return {
        ...state,
        progress: state.progress - 20,
      };
    }
    default:
      return state;
  }
}
