/**
 * Meteor Methods
 */

import { HTTP } from 'meteor/http';
import _ from 'lodash';
import Pages from '../collections/pages';

const api = 'https://graph.facebook.com/v2.6/me';


Meteor.methods({
  fetchPages() {
    if (!this.userId) return;

    const endpoint = 'accounts';
    const access_token = Meteor.user().services.facebook.accessToken;
    const response = HTTP.get(`${api}/${endpoint}?access_token=${access_token}`);
    const pages = response.data && response.data.data.map(page => _.pick(page, ['name', 'access_token']));

    _.each(pages, (page) => {
      const isSave = Pages.find({
        userId: this.userId,
        name: page.name,
      }).count();

      if (!isSave) {
        Pages.insert(_.merge(page, {
          userId: this.userId,
          subscribed: false,
        }));
      }
    });
  },

  subscribeBotToPage(_id) {
    if (!this.userId) {
      throw new Meteor.Error(404, 'Not allowed');
    }

    const {userId} = this;
    const endpoint = `subscribed_apps`;
    const access_token = _.get(Pages.findOne({_id}), 'access_token');

    const response = HTTP.post(`${api}/${endpoint}?access_token=${access_token}`);

    if(response.data.success){
      Pages.update({access_token}, {$set: {
        subscribed: true,
      }});
    }
  },

  unSubscribeBotToPage(_id) {
    if (!this.userId) {
      throw new Meteor.Error(404, 'Not allowed');
    }

    const {userId} = this;
    const endpoint = `subscribed_apps`;
    const access_token = _.get(Pages.findOne({_id}), 'access_token');
    console.log('access_token', access_token);

    const response = HTTP.del(`${api}/${endpoint}?access_token=${access_token}`);

    if(response.data.success){
      Pages.update({name, userId: this.userId}, {$set: {
        subscribed: false,
      }});
    }


  },

});