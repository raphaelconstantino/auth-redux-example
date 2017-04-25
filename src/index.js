import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';
import App from './App';
import List from './components/List';
import auth from './reducers/auth';
import list from './reducers/list';
import listApi from './middleware/listApi';
import authApi from './middleware/authApi';
import './styles/bootstrap.min.css';
import './styles/custom.bootstrap.css';

// Combine APP reducers
const listApp = combineReducers({
  auth,
  list
})

let createStoreWithMiddleware = applyMiddleware(thunkMiddleware, listApi, authApi)(createStore);
let store = createStoreWithMiddleware(listApp);

ReactDOM.render(
  <Provider store={store}>  
    <Router history={browserHistory}>
      <Route path="/" component={App} >
        <IndexRoute component={List}/>
        <Route path="/list" component={List}/>
			</Route>  	
    </Router>    
  </Provider>,
  document.getElementById('root')
);
