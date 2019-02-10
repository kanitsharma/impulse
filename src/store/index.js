import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";

import rootReducer from "./rootReducer";

// Store setup
const middlewares = [logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);

// enabling HMR
if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept("./rootReducer", () => {
      import("./rootReducer").then(({ default: nextRootReducer }) => {
        Store.replaceReducer(nextRootReducer);
      });
    });
  }
}

export { Store };
