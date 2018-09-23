import Loadable from "react-loadable";
import React from "react";

export default Loadable({
  loader: () => import(/* webpackChunkName: "home" */ "./home"),
  loading: () => <div />
});
