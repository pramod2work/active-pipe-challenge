import { createAction, handleActions } from 'redux-actions'

// Actions
export const LIST_PROPERTIES_FETCH = 'LIST_PROPERTIES_FETCH'
export const LIST_PROPERTIES_SUCCESS = 'LIST_PROPERTIES_SUCCESS'
export const LIST_PROPERTIES_FAILURE = 'LIST_PROPERTIES_FAILURE'

const initialState = {
  data: null,
  error: false,
  inProgress: false,
}

export const listPropertiesFetch = createAction(LIST_PROPERTIES_FETCH)
export const listPropertiesSuccess = createAction(LIST_PROPERTIES_SUCCESS)
export const listPropertiesFailure = createAction(LIST_PROPERTIES_FAILURE)

const listPropertiesDataReducer = handleActions({
  [listPropertiesFetch]: (state, action) => ({
    ...initialState,
    inProgress: true
  }),
  [listPropertiesSuccess]: (state, action) => ({
    ...initialState,
    data: action.payload,
  }),
  [listPropertiesFailure]: (state, action) => ({
    ...initialState,
    error: action.payload,
  }),
}, initialState)

export default listPropertiesDataReducer
