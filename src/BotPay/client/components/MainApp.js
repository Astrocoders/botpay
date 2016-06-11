import React, {Component, PropTypes} from 'react';
import LoginFacebook from './LoginFacebook';

export default class MainApp extends Component {
  propTypes: {
    user: PropTypes.object,
  }

  render(){
    return (
      <div className="main">
        <LoginFacebook
          label="Entrar com Facebook"
        />
      </div>
    );
  }
};