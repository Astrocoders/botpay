import React, {Component} from 'react';
import pagesContainer from '../containers/pages';
import { Meteor } from 'meteor/meteor';

@pagesContainer
export default class ListPages extends Component {

  _subscribe(_id) {
    Meteor.call('subscribeBotToPage', _id);
  }

  _unsubscribe(_id) {
    Meteor.call('unSubscribeBotToPage', _id);
  }

  render() {
    return (
      <ul>
        {
          this.props.pages.map(({_id, name, subscribed}, index) =>
            <li
              key={index}
              onClick={() => subscribed ? this._unsubscribe(_id) : this._subscribe(_id)}
            >
              {name} - {subscribed.toString()}
            </li>
          )
        }
      </ul>
    );
  }
}