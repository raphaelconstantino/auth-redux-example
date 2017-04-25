import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Logout from './Logout';
import { logoutUser } from '../actions/authActionCreator';

export default class Navbar extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool.isRequired
  }

  render() {
    const { dispatch, isAuthenticated } = this.props

    return (
      <nav className='navbar navbar-default'>
        <div className='container-fluid'>
          <a className="navbar-brand" href="#">i2x Challange</a>
          <div className='navbar-form pull-right'>

            {isAuthenticated &&
              <Logout onLogoutClick={() => dispatch(logoutUser())} />
            }

          </div>
        </div>
      </nav>
    )
  }

}