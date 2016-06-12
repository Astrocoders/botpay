import React, {Component, PropTypes} from 'react';
import LoginFacebook from './LoginFacebook';
import { Meteor } from 'meteor/meteor';
import ListPages from './ListPages';
import userContainer from '../containers/user';

@userContainer
export default class MainApp extends Component {
  render(){
    return (
      <div className="main">
        {
           this.props.user ?
          <ListPages user={this.props.user} /> :
          <LoginFacebook label="Entrar com Facebook"/>
        }
      </div>
    );
  }
}