import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";

import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";

// Store setup
const sagaMiddleware = createSagaMiddleware(rootSaga);
const middlewares = [logger, sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const Store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middlewares))
);
sagaMiddleware.run(rootSaga);

// enabling HMR
if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept("./rootReducer", () => {
      import("./rootReducer").then(({ default: nextRootReducer }) => {
        Store.replaceReducer(nextRootReducer);
      });
    });

    module.hot.accept("./rootSaga", () => {
      import("./rootSaga").then(({ default: nextRootSaga }) => {
        sagaMiddleware.run(nextRootSaga);
      });
    });
  }
}

export { Store };
