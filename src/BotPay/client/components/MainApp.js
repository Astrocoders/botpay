import React, {Component, PropTypes} from 'react';

export default class MainApp extends Component {
  render(){
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}