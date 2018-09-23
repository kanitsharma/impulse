import { createStore, applyMiddleware, compose } from "redux";
import { createEpicMiddleware, createStateStreamEnhancer } from "redux-most";
import logger from "redux-logger";

import rootReducer from "./rootReducer";
import rootEpic from "./rootEpic";

// Store setup
const epicMiddleware = createEpicMiddleware(rootEpic);
const middlewares = [logger];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(
  rootReducer,
  composeEnhancers(
    createStateStreamEnhancer(epicMiddleware),
    applyMiddleware(...middlewares)
  )
);

// enabling HMR
if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept("./rootReducer", () => {
      import("./rootReducer").then(({ default: nextRootReducer }) => {
        Store.replaceReducer(nextRootReducer);
      });
    });

    module.hot.accept("./rootEpic", () => {
      import("./rootEpic").then(({ default: nextRootEpic }) => {
        epicMiddleware.replaceEpic(nextRootEpic);
      });
    });
  }
}

export { Store };
