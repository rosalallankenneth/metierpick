import { combineReducers } from "redux";

// reducers
import { authReducer } from "./authReducers";
import { assessmentReducer } from "./assessmentReducers";
import { mapReducer } from "./mapReducers";

export const rootReducer = combineReducers({
  auth: authReducer,
  assessment: assessmentReducer,
  map: mapReducer
});
