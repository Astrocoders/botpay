import React from 'react';
import { compose } from 'react-komposer';
import { Bert } from 'meteor/themeteorchef:bert';
import _ from 'lodash';

function composer(props, onData) {
  Meteor.call('fetchPages', (error, pages) => {
    if (error) {
      Bert.alert(error.reason, 'danger');
    } else {
      onData(null, {
        pages,
      });
    }
  });
}

export default compose(composer);
