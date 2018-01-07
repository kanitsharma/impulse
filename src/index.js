import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './store/store'

import Home from './connectors/home/main'
import './base.css'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
  <Provider store={Store}>
    <Home />
  </Provider>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./connectors/home/main', () => {
    ReactDOM.render(
      <Provider store={Store}>
        <Home />
      </Provider>,
      document.getElementById('root')
    )
  })
}

registerServiceWorker()
