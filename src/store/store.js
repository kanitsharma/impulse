import { createStore, applyMiddleware } from 'redux'
import { logger } from './logger'
import RootReducer from './rootReducer'

const middleware = applyMiddleware(logger)
const store = createStore(RootReducer, middleware)

export default store
