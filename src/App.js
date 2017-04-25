import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { loginUser } from './actions/authActionCreator';
import './styles/app.css';

class App extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    list : PropTypes.object.isRequired,
    auth : PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
  }

  render() {
    const { dispatch, isAuthenticated, errorMessage, list, auth } = this.props
    return (
      <div>

        {!isAuthenticated &&
          <Login
            auth={auth}
            errorMessage={errorMessage}
            onLoginClick={ creds => dispatch(loginUser(creds)) }
          />
        }

        {isAuthenticated &&
          <div>
              <Navbar
                  isAuthenticated={isAuthenticated}
                  dispatch={dispatch}
                />
              <div className='container'>
                
                {React.cloneElement(this.props.children, { dispatch, list})}
                
              </div>

              <footer>i2x Challenge performed by Raphael Constantino.</footer>

           </div>   
           
        }

      </div>
    )
  }
}

// These props come from the application's
// state when it is started
function mapStateToProps(state) {

  const { list, auth } = state;
  const { isAuthenticated, errorMessage } = auth;

  return {
    list,
    auth,
    isAuthenticated,
    errorMessage
  }
}

export default connect(mapStateToProps)(App)