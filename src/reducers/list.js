import {
  LIST_REQUEST, LIST_SUCCESS, LIST_FAILURE
} from '../actions/listActionCreator'

let initState = {
    isFetching: false,
    response: {count : 0, results : []},
    authenticated: false
  }

// The list reducer
export default function list(state = initState, action) {
  
  switch (action.type) {
    case LIST_REQUEST:
      return Object.assign({}, state, {
        isFetching: true
      })
    case LIST_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        response: action.response,
        authenticated: action.authenticated || false
      })
    case LIST_FAILURE:
      return Object.assign({}, state, {
        isFetching: false
      })
    default:
      return state
    }
}