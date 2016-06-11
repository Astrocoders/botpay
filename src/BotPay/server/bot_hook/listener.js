import { Picker } from 'meteor/meteorhacks:picker';
import bodyParser from 'body-parser';
// import Pages from '/collections/pages';

Picker.middleware(bodyParser.json());

Picker.route('/bot_postback', function(req, res){
  const notification = req.body.entry;

  console.log(notification);

  const messages = notification[0].messaging;
  const pageFbId = notification[0].id;
});
