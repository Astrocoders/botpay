import {Meteor} from 'meteor/meteor';
import Pages from '../collections/pages';

Meteor.publish('userPages', function() {
  return Pages.find({userId: this.userId});
});