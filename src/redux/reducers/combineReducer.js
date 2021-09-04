import { combineReducers } from "redux";

// reducers
import { authReducer } from "./authReducers";
import { assessmentReducer } from "./assessmentReducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  assessment: assessmentReducer
});
