import { all, takeLatest } from 'redux-saga/effects'

import { listProperties } from './listProperties'
import { LIST_PROPERTIES_FETCH } from '../reducers/listProperties'

// single entry point to start all the sagas, our root saga, a generator function
export function* rootSaga() {
  yield all([
    takeLatest(LIST_PROPERTIES_FETCH, listProperties),
  ])
}

export default rootSaga
