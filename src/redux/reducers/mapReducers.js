// starting state values
const initialState = {
  pathSelect: null
};

export const mapReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PATH_SELECT":
      return { ...state, pathSelect: action.payload.path };
    default:
      return state;
  }
};
