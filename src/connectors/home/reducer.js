import createReducer from '../../futils/createReducer'

const initialState = {
  showText: true
}

const actionHandlers = {
  TOGGLE_TEXT: (s, a) => ({ ...s, showText: !s.showText }),
}

export default createReducer(initialState, actionHandlers)
