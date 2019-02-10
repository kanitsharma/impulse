import React from "react";
import { connect } from "react-redux";
import actionSpreader from "../../futils/actionSpreader";
import Button from "../../components/button";
import Popup from "../../components/popup";

const Home = ({ togglePopup, popup }) => (
  <div>
    <Button onClick={togglePopup}>Toggle Popup</Button>
    {popup && <Popup togglePopup={togglePopup} />}
  </div>
);

const mapStateToProps = state => ({
  ...state.home
});

const mapDispatchToProps = dispatch => ({
  togglePopup: () => dispatch(actionSpreader("TOGGLE_POPUP"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
