import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import { Router } from "@reach/router";
// import Home from "../connectors/home";

export const Core = Store => {
  const render = () => {
    ReactDOM.render(
      <Provider store={Store}>
        {/* <Router>
          <Home path="/" />
        </Router> */}
        Yo
      </Provider>,
      document.getElementById("root")
    );
  };

  if (module.hot) {
    module.hot.accept("../connectors/home/index", () => {
      render();
    });
  }

  render();
};
