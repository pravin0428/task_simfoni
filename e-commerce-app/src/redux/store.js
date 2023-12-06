import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { searchReducer } from "./search/reducer";
let rootReducer = combineReducers({ search: searchReducer });
const store = legacy_createStore(rootReducer, compose(applyMiddleware(thunk)));
export default store;
