import React, {Component, PropTypes} from 'react';
import LoginFacebook from './LoginFacebook';
import { Meteor } from 'meteor/meteor';
import ListPages from './ListPages';

export default class MainApp extends Component {
  render(){
    return (
      <div className="main">
        {
           Meteor.userId() ?
          <ListPages user={Meteor.user()} /> :
          <LoginFacebook label="Entrar com Facebook"/>
        }
      </div>
    );
  }
};