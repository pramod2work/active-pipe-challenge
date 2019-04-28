import { call, put } from 'redux-saga/effects'

import * as ApiConfig from '../../utils/apiConfig'
import { LIST_PROPERTIES_SUCCESS, LIST_PROPERTIES_FAILURE } from '../../reducers/listProperties'

import * as listProperties from './index'

const listPropertiesGenerator = listProperties.listProperties()
const successResponse = {
  data: {},
}
const errorResponse = {
  response: {},
}

describe('Get Properties API Config', () => {
  test('Check get profile API Call', () => {
    expect(listPropertiesGenerator.next().value).toEqual(call(listProperties.getPropertiesAction))
  })

  test('Check for reducer call of api response', () => {
    expect(listPropertiesGenerator.next(successResponse).value).toEqual(put({
      payload: successResponse.data,
      type: LIST_PROPERTIES_SUCCESS,
    }))
  })

  test('Check for reducer call of api Error response', () => {
    expect(listPropertiesGenerator.throw(errorResponse).value).toEqual(put({
      payload: errorResponse.response,
      type: LIST_PROPERTIES_FAILURE,
    }))
  })

  test('Check for API axios instance call', () => {
    const mockGetFunction = { get: jest.fn() }
    ApiConfig.getApiConfig = jest.fn(() => mockGetFunction)
    listProperties.getPropertiesAction()
    expect(mockGetFunction.get).toHaveBeenCalledWith(
      ApiConfig.apiUriConfig.listProperties,
    )
  })
})
