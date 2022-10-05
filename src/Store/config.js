import { combineReducers, createStore } from "redux";
// import { demoRedux, bTapXe } from "./reducers";
import * as reducers from "./reducers";
const rootReducers = combineReducers({
  ...reducers,
});
export const Store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
