/**
 * Meteor Methods
 */

import { HTTP } from 'meteor/http';

Meteor.methods({
  fetchPages() {
    const access_token = Meteor.user().services.facebook.accessToken;
    const response = HTTP.get(`https://graph.facebook.com/v2.6/me/accounts?access_token=${access_token}`);
    return response.data && response.data.data.map(page => _.pick(page, ['name']));
  }
});

/**
 * Function helpers
 */