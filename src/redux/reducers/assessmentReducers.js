// starting state values
const initialState = {
  isReady: false
};

// redux reducer for assessment form
export const assessmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "START_ASSESSMENT":
      // change ready state to true
      return { ...state, isReady: true };
    case "STOP_ASSESSMENT":
      // change ready state to false
      return { ...state, isReady: false };
    default:
      return state; // return old state
  }
};
