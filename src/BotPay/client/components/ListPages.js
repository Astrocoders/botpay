import React, {Component} from 'react';
import pagesContainer from '../containers/pages';

@pagesContainer
export default class ListPages extends Component {
  render() {
    console.log(' this.props.pages',  this.props.pages);
    return (
      <ul>
        {
          this.props.pages.map(({name}) =>
            <li
              style="pointer:cursor"
              onClick=""
            >
              {name}
            </li>
          )
        }
      </ul>
    );
  }
}