import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

class ListBox extends Component {

  static propTypes = {
    item : PropTypes.object.isRequired
  }

  render() {
    return (
      <div className="col-md-6 box-container">
          <div className="box">
            <div>
                <strong>Final Script:</strong>
                <p>{this.props.item.final_script}</p>
            </div>
            <div>    
                <strong>Rating: </strong>
                <span className={"star star" + this.props.item.rating }></span>
            </div>
            <div>
                <strong>Duration: </strong>
                <span>{moment.duration(this.props.item.duration, "seconds").humanize()}</span>
            </div>
            <div>
                <strong>Listen: </strong>
                <audio controls>
                <source src={this.props.item.url} type='audio/mpeg' />
                    Your browser does not support audio.
                </audio>
            </div>
            <div>
                <strong>Created: </strong>
                <span>{moment(this.props.item.created).format("LLLL")}</span>
            </div>
        </div>
      </div>    
    );
  }
}

export default ListBox;
