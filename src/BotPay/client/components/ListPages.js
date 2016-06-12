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
    console.log('this.props.pages', this.props.pages);
    return (
      <div className="row">
        {
          this.props.pages.map(({_id, name, subscribed, avatar}, index) =>
            <div className="col-md-3"  key={index}>
              <div className="panel panel-default">
                <div className="panel-heading">{name}</div>
                <div className="panel-body">
                  <div className="col-md-6">
                    <img src={avatar} alt="..." className="img-rounded fbPageIcon" />
                  </div>
                  <div className="col-md-6">
                    <button type="button" onClick={() => subscribed ? this._unsubscribe(_id) : this._subscribe(_id)} className="btn btn-success btn-connect">{subscribed ? 'Desconectar' : 'Conectar'}</button>
                  </div>
                </div>
              </div>
            </div>
          )
        }
      </div>
    );
  }
}