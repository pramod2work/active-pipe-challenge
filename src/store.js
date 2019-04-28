import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly'

import reducers from './reducers'
import rootSagaState from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
)

sagaMiddleware.run(rootSagaState)

export default store
