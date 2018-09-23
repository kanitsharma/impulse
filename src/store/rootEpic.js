import { combineEpics } from "redux-most";
import coreEpic from "../core/epic";

export default combineEpics([coreEpic]);
