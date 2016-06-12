/**
 * Meteor Methods
 */

import { HTTP } from 'meteor/http';
import _ from 'lodash';
import Pages from '../collections/pages';

const api = 'https://graph.facebook.com/v2.6/';

Meteor.methods({
  fetchPages() {
    if (!this.userId) return;

    const endpoint = 'accounts';
    const access_token = Meteor.user().services.facebook.accessToken;
    const response = HTTP.get(`${api}/me/${endpoint}?access_token=${access_token}`);

    const pages = response.data && response.data.data.map(page => {
      const obj = _.pick(page, ['name', 'access_token', 'id']);
      obj.avatar = `https://graph.facebook.com/${page.id}/picture?type=normal`;
      return obj
    });

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
    const page = Pages.findOne({_id});
    const {id, access_token} = page;

    const response = HTTP.post(`${api}/${id}/${endpoint}?access_token=${access_token}`);
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
    const page = Pages.findOne({_id});
    const {id, access_token} = page;

    const response = HTTP.post(`${api}/${id}/${endpoint}?access_token=${access_token}`);

    if(response.data.success){
      Pages.update({_id, userId: this.userId}, {$set: {
        subscribed: false,
      }});
    }
  },
});
