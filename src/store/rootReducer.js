import { combineReducers } from 'redux'
import homeReducer from '../connectors/home/reducer'

export default combineReducers({
  home: homeReducer
})
