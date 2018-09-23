import createReducer from "../../futils/createReducer";

const initialState = {
  popup: false
};

const actionHandlers = {
  TOGGLE_POPUP: s => ({ ...s, popup: !s.popup })
};

export default createReducer(initialState, actionHandlers);
