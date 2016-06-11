/*****************************************************************************/
/* Facebook config  */
/*****************************************************************************/

const configureFacebook = function(config) {
 ServiceConfiguration.configurations.upsert({
   service: 'facebook'
 }, {
   $set: {
     loginStyle: 'popup',
     service: 'facebook',
     appId: config.clientId || config.appId,
     secret: config.secret,
   },
  });
};

// set the settings object with meteor --settings
let facebookConfig = Meteor.settings.facebook;
if (facebookConfig) {
  console.log('Got settings for facebook');
  configureFacebook(facebookConfig);
}
