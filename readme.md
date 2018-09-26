# Impulse

<img src="codeimgs/logo.gif" />

## Next Generation React-Redux Boilerplate

## Features

- Contains latest tools like React 16, webpack 4, Babel 7.
- Next Generation Routing with @reach/router
- Component and Route level code-splitting with React-Loadable and @reach/router
- Css-in-js with React-Emotion
- Manage side-effects using Redux-saga
- Out of the box support for Sass/Scss, .graphql and svgs
- Testing with Jest

## Highlights

### Webpack 4 and Babel 7

- Webpack 4 and Babel 7 provides awesome development experience with Hot-reloading, Tree-shaking, Faster Build times and all the good stuff :)

### Hardcore Code Splitting

<img src="codeimgs/cs.png" />

- Split your Redux store, Views (Components and Connectors) into different chunks and show a loader even before react loads, this gives a extremely fast initial paint.

- Split your Routes and React components using react loadable.

- Babel-preset-env compiles all node_modules and creates separate vendors~chunks for each our code chunk.

### Opinionated Css-in-js with React-Emotion

<img src="codeimgs/emotion.png" />

- React-Emotion provides Css-in-js support with extremely small and fast runtime.

- Babel plugin emotion provides dead code elimination and other syntactic sugars

### Next generation routing with @reach/router

<img src="codeimgs/routes.png" />

- Extremely easy and intuitive routing with @reach/router

### Redux-Saga

- Redux saga provides imperative way to layout your side effects.

- Redux saga provides a huge set of utilities.

## Quick Start

```
  git clone https://github.com/kanitsharma/Impulse.git

  cd Impulse

  yarn

  yarn start
```

### Building App

```
  yarn build
```
