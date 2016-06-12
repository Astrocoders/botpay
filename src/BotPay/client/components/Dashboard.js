import React, {Component, PropTypes} from 'react';
import { Meteor } from 'meteor/meteor';
import ListPages from './ListPages';
import userContainer from '../containers/user';

@userContainer
export default class Dashboard extends Component {
  render(){
    return (
      <ListPages user={this.props.user} />
    );
  }
}