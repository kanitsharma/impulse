const getLoader = () => {
  const Loader = document.getElementById("loader");
  return Loader;
};

export const renderLoader = () =>
  new Promise(resolve => {
    const Loader = getLoader();
    const render = () => {
      Loader.innerHTML = `
      <div class="lds-ripple"><div></div><div></div></div>
    `;
    };
    const remove = () => document.body.removeChild(Loader);

    resolve({ render, remove });
  });
