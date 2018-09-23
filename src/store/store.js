import { createStore, applyMiddleware } from 'redux'
import { logger } from './logger'
import rootReducer from './rootReducer'

const middleware = applyMiddleware(logger)
const store = createStore(rootReducer, middleware)

//enabling HMR
if (process.env.NODE_ENV !== "production") {
  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(rootReducer)
    })
  }
}

export default store
