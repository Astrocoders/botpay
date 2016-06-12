import {Meteor} from 'meteor/meteor';
import Pages from '../collections/pages';

Meteor.publish('userPages', function() {
  return Pages.find({userId: this.userId}, {
    fields: {
      name: 1,
      subscribed: 1,
      avatar: 1,
    }
  });
});

Meteor.publish(null, function() {
  return Meteor.users.find({_id: this.userId}, {
    fields: {
      profile: 1,
      'services.facebook.id': 1,
    }
  });
});