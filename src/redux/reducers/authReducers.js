// starting state values
const initialState = {
  username: "John Doe"
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, username: action.payload.username };
    default:
      return state;
  }
};
