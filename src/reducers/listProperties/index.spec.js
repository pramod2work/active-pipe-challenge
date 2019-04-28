import * as listPropertiesDataReducer from './index'

const initialState = {
  data: null,
  error: false,
  inProgress: false,
}
const responseData = { properties: true }
const errorResponse = { errorData: true }

describe('listPropertiesDataReducer', () => {
  test('Dispatch for service request', () => {
    expect(listPropertiesDataReducer.listPropertiesFetch()).toEqual({
      type: listPropertiesDataReducer.LIST_PROPERTIES_FETCH,
    })
  })

  test('Response of success callback', () => {
    expect(listPropertiesDataReducer.listPropertiesSuccess(responseData)).toEqual({
      type: listPropertiesDataReducer.LIST_PROPERTIES_SUCCESS,
      payload: { ...responseData },
    })
  })

  test('Response of error callback', () => {
    expect(listPropertiesDataReducer.listPropertiesFailure(errorResponse)).toEqual({
      type: listPropertiesDataReducer.LIST_PROPERTIES_FAILURE,
      payload: { ...errorResponse },
    })
  })

  test('Test reducer response to success promise', () => {
    expect(listPropertiesDataReducer.default(
      undefined,
      listPropertiesDataReducer.listPropertiesSuccess(responseData),
    ))
      .toEqual({ ...initialState, data: responseData })
  })

  test('Test reducer response to error promise', () => {
    expect(listPropertiesDataReducer.default(
      undefined,
      listPropertiesDataReducer.listPropertiesFailure(errorResponse),
    ))
      .toEqual({ ...initialState, error: errorResponse })
  })

  test('Test reducer response to request promise', () => {
    expect(listPropertiesDataReducer.default(
      undefined,
      listPropertiesDataReducer.listPropertiesFetch(),
    ))
      .toEqual({ ...initialState, inProgress: true })
  })
})
