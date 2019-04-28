import { call, put } from 'redux-saga/effects'

import * as ApiConfig from '../../utils/apiConfig'
import { PROFILE_SUCCESS, PROFILE_FAILURE } from '../../reducers/profileDetailsReducer'
import { EDIT_PERSON_RESET } from '../../reducers/updatePersonDetails/editPersonReducer'

import * as getProfile from './index'

const getProfileGenerator = getProfile.getProfile()
const successResponse = {
  data: {},
}
const errorResponse = {
  error: {},
}
const editReset = {
  edit: false,
}

const expectedHeaders = {
  headers: {
    'ANZ-Application-ID': 'au-ib',
    'ANZ-Channel-Function': 'view-profile',
    'ANZ-Channel-ID': 'web-idhub',
    Accept: 'application/vnd.ciam-anz.com+json;version=1.0',
    Authorization: '',
    RequestID: expect.any(String),
  },
}

describe('Get Profile API Config', () => {
  test('Check for edit person state reset', () => {
    expect(getProfileGenerator.next().value).toEqual(put({
      payload: editReset,
      type: EDIT_PERSON_RESET,
    }))
  })

  test('Check get profile API Call', () => {
    expect(getProfileGenerator.next().value).toEqual(call(getProfile.getProfileDataAction))
  })

  test('Check for reducer call of api response', () => {
    expect(getProfileGenerator.next(successResponse).value).toEqual(put({
      payload: successResponse,
      type: PROFILE_SUCCESS,
    }))
  })

  test('Check for reducer call of api Error response', () => {
    expect(getProfileGenerator.throw(errorResponse).value).toEqual(put({
      payload: errorResponse,
      type: PROFILE_FAILURE,
    }))
  })

  test('Check for API axios instance call', () => {
    ApiConfig.getUUIDTimeBased = jest.fn()
    const mockGetFunction = { get: jest.fn() }
    ApiConfig.getApiConfig = jest.fn(() => mockGetFunction)
    getProfile.getProfileDataAction()
    expect(mockGetFunction.get).toHaveBeenCalledWith(
      ApiConfig.apiUriConfig.getProfile,
      expectedHeaders,
    )
  })
})
