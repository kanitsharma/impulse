import { combineReducers } from "redux";
import coreReducer from "../core/reducer";
import homeReducer from "../connectors/home/reducer";

export default combineReducers({
  core: coreReducer,
  home: homeReducer
});
