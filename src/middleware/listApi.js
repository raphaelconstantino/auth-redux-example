import HttpService from '../util/HttpService';

export const CALL_API = Symbol('Call API');

export default store => next => action => {

  const callAPI = action[CALL_API]

  // So the middleware doesn't get applied to every single action
  if (typeof callAPI === 'undefined') {
    return next(action);
  }

  let { endpoint, types, authenticated } = callAPI;

  const [ requestType, successType, errorType ] = types;

  // Request Type
  next({type: requestType});

  // Passing the authenticated boolean back in our data will let us distinguish between normal and secret quotes
  return HttpService.get(endpoint).then(
    response =>
      next({
        response,
        authenticated,
        type: successType
      }),
    error => next({
      error: error.message || 'There was an error.',
      type: errorType
    })
  )
}