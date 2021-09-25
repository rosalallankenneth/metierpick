// starting state values
const initialState = {
  user: null,
  userInfo: {
    firstname: "",
    lastname: ""
  }
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...state, user: action.payload.user };
    case "SET_USER_INFO":
      return {
        ...state,
        userInfo: {
          firstname: action.payload.firstname,
          lastname: action.payload.lastname
        }
      };
    default:
      return state;
  }
};
