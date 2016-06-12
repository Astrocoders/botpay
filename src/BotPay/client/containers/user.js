import React from 'react';
import { composeWithTracker } from 'react-komposer';
import { Meteor } from 'meteor/meteor';

function composer(props, onData) {
  onData(null, {
    user: Meteor.user(),
  });
}

export default composeWithTracker(composer);
