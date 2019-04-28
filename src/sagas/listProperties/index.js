import { call, put } from 'redux-saga/effects'

import { getApiConfig, apiUriConfig } from '../../utils/apiConfig'
import { listPropertiesSuccess, listPropertiesFailure } from '../../reducers/listProperties'

export const getPropertiesAction = () => {
  const propertiesService = getApiConfig()
  return propertiesService.get(
    apiUriConfig.listProperties,
  )
}

export function* listProperties() {
  try {
    const response = yield call(getPropertiesAction)
    yield put(listPropertiesSuccess(response.data))
  } catch (error) {
    yield put(listPropertiesFailure(error.response))
  }
}
