import React from 'react';
import { composeWithTracker } from 'react-komposer';
import Pages from '../../collections/pages';

function composer(props, onData) {
  Meteor.call('fetchPages');
  const handle = Meteor.subscribe('userPages');

  if (handle.ready()) {
    const pages = Pages.find().fetch();
    onData(null, {
      pages,
    });
  }
}

export default composeWithTracker(composer);
