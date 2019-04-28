import * as profileDataReducer from './index'

const responseData = { profile: true }
const errorResponse = { errorData: true }

describe('profileDataReducer', () => {
  test('Dispatch for service request', () => {
    expect(profileDataReducer.profilefetch()).toEqual({
      type: profileDataReducer.PROFILE_REQUEST,
      payload: { inProgress: true },
    })
  })

  test('Response of success callback', () => {
    expect(profileDataReducer.profilesuccess(responseData)).toEqual({
      type: profileDataReducer.PROFILE_SUCCESS,
      payload: { data: responseData },
    })
  })

  test('Response of error callback', () => {
    expect(profileDataReducer.profilefailure(errorResponse)).toEqual({
      type: profileDataReducer.PROFILE_FAILURE,
      payload: { error: errorResponse },
    })
  })

  test('Test reducer response to success promise', () => {
    expect(profileDataReducer.default(
      undefined,
      profileDataReducer.profilesuccess(responseData),
    ))
      .toEqual({ data: responseData })
  })

  test('Test reducer response to error promise', () => {
    expect(profileDataReducer.default(
      undefined,
      profileDataReducer.profilefailure(errorResponse),
    ))
      .toEqual({ error: errorResponse })
  })

  test('Test reducer response to request promise', () => {
    expect(profileDataReducer.default(
      undefined,
      profileDataReducer.profilefetch(),
    ))
      .toEqual({ inProgress: true })
  })
})
