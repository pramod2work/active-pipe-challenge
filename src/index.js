import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import './style/index.css'

import App from './components/App'
import store from './store'
import * as serviceWorker from './utils/serviceWorker'

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(<Root />, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
