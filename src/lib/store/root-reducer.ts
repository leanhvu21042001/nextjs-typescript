import { combineReducers } from "redux";

import { counterReducer } from "./features/counter/counter-slice";
import { switchReducer } from "./features/switch/switch-slice";

const rootReducer = combineReducers({
  counter: counterReducer,
  switch: switchReducer,
});

export default rootReducer;
