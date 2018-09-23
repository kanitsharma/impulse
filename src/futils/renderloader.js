// Add your favourite CSS/SVG loader here
const Loader = `
  <div class="lds-ripple"><div></div><div></div></div>
`;

const getNode = () => document.getElementById("loader");

export default () =>
  new Promise(resolve => {
    const node = getNode();
    const render = () => {
      node.innerHTML = Loader;
    };
    const remove = () => document.body.removeChild(node);

    resolve({ render, remove });
  });
