import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Router } from "@reach/router";
import Home from "../connectors/home";

export const Core = Store => {
  const render = () => {
    ReactDOM.render(
      <Suspense fallback={<div>Loading...</div>}>
        <Provider store={Store}>
          <Router>
            <Home path="/" />
          </Router>
        </Provider>
      </Suspense>,
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
