import React, {Component, PropTypes} from 'react';
import { Meteor } from 'meteor/meteor';
import ListPages from './ListPages';
import userContainer from '../containers/user';

@userContainer
export default class Dashboard extends Component {
  render(){
    return (
      <div classNameName="container body">
        <div className="top_nav">
          <div className="nav_menu" style={{padding: '0 10px 0 10px'}}>
            <nav>
              <ul className="nav navbar-nav navbar-right">
                <li className="">
                  <a className="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                    <img src={`http://graph.facebook.com/v2.6/${Meteor.user().services.facebook.id}/picture`} alt="" /> {Meteor.user().profile.name}
                    <span className=" fa fa-angle-down"></span>
                  </a>
                  <ul className="dropdown-menu dropdown-usermenu pull-right">
                    <li><a href="login.html"><i className="fa fa-sign-out pull-right"></i> Log Out</a></li>
                  </ul>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="right_col" role="main" style={{padding: '0 10px 0 10px'}}>
          <div className="row">
            <div className="x_title">
              <h2>Conecte suas páginas ao BotPay</h2>
              <div className="clearfix"></div>
            </div>
          </div>
          <br/>
          <ListPages user={this.props.user} />
        </div>

      </div>
    );
  }
}