import { Picker } from 'meteor/meteorhacks:picker';
import bodyParser from 'body-parser';
import Pages from '../../collections/pages';
import { HTTP } from 'meteor/http';

Picker.middleware(bodyParser.json());

Picker.route('/bot_postback', function(req, res){
  if (
    req.method === 'GET' &&
    req.query['hub.verify_token'] === 'i_love_potatoes'
  ) {
    res.end(req.query['hub.challenge'])
    return;
  }

  const notification = req.body.entry;

  console.log('body', req.body);

  let messaging_events = req.body.entry[0].messaging
  const pageFbId = req.body.entry[0].id;
  for (let i = 0; i < messaging_events.length; i++) {
    let event = req.body.entry[0].messaging[i]
    let sender = event.sender.id
    if (event.message && event.message.text) {
      const text = event.message.text;
      const page = Pages.findOne({
        id: pageFbId,
      });

      console.log({ page });

      sendTextMessage({
        sender,
        text: `Text received, echo: ${text.substring(0, 200)}`,
        pageAccessToken: page.access_token,
      });
    }
  }
  res.writeHead(200);
  res.end();
});

function sendTextMessage({sender, text, pageAccessToken}) {
  const messageData = { text };
  const response = HTTP.post('https://graph.facebook.com/v2.6/me/messages', {
    params: {
      access_token: pageAccessToken,
    },
    data: {
      recipient: {id:sender},
      message: messageData,
    },
  });

  console.log(response);
}
