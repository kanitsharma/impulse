import { map } from "most";
import { select } from "redux-most";
import actionSpreader from "../futils/actionSpreader";

export default x => map(() => actionSpreader("Started"), select("NEVER", x));
