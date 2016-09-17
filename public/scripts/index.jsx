import React from 'react'
import { Provider } from 'react-redux'
import BaseComponent from './components/BaseComponent.jsx'
import Store from './stores/Store.jsx'

ReactDOM.render(
  <Provider store={Store}>
    <BaseComponent />
  </Provider>,
  document.getElementById('content')
)
