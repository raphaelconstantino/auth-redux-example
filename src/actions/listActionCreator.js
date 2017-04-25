// The middleware to call the API for quotes
import { CALL_API } from '../middleware/listApi'

// LIST
export const LIST_REQUEST = 'LIST_REQUEST'
export const LIST_SUCCESS = 'LIST_SUCCESS'
export const LIST_FAILURE = 'LIST_FAILURE'

export function fetchItems() {
  return {
    [CALL_API]: {
      endpoint: 'ai/recording/list/',
      authenticated: true,
      types: [LIST_REQUEST, LIST_SUCCESS, LIST_FAILURE]
    }
  }
}