import "./critical.scss";
import renderLoader from "./futils/renderloader";

renderLoader().then(({ render, remove }) => {
  // Render a loader here without react
  render();

  // Meanwhile loading other chunks
  Promise.all([
    import(/* webpackChunkName: "core" */ "./core"),
    import(/* webpackChunkName: "store" */ "./store")
  ])
    .then(([{ Core }, { Store }]) => Core(Store))
    .then(() => remove());
});
