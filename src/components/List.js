import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';
import ListBox from './ListBox';
import { fetchItems } from '../actions/listActionCreator';
import '../styles/list.css';

export default class App extends Component {
  
  static propTypes = {
    dispatch: PropTypes.func,
    list : PropTypes.object
  }

	componentDidMount() {
    const { dispatch } = this.props;
		dispatch(fetchItems());
	}  
  
	toggleLoader() {
    const { list } = this.props;
    if (list.isFetching)
		{
			return (
				<div className="loading"></div>
			)
		}

	}

  render() {
    const { list } = this.props
    return (
      <div className="list row is-flex">
        <p>Showing <strong>{list.response.count}</strong> items</p>
        {this.toggleLoader()}
				<ReactCSSTransitionGroup
          transitionName="list"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
						{
							list.response.results.map(function (obj) {
								return <ListBox key={obj.created} item={obj} />
							})
						}
        </ReactCSSTransitionGroup>

      </div>
    )
  }
}
