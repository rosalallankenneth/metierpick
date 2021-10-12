// starting state values
const initialState = {
  assessmentResults: null
};

// redux reducer for assessment form
export const assessmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_RESULTS":
      // return results after assessment
      return { ...state, assessmentResults: action.payload.results };
    default:
      return state; // return old state
  }
};
