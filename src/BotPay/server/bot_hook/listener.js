import { Picker } from 'meteor/meteorhacks:picker';
import _ from 'lodash';
import bodyParser from 'body-parser';
import Pages from '../../collections/pages';
import { HTTP } from 'meteor/http';
import querystring from 'querystring';
import {
  verifyRequest,
  sendTextMessage,
} from '../lib/messenger';

Picker.middleware(bodyParser.json());
Picker.middleware( bodyParser.urlencoded( { extended: false } ) );

Picker.route('/bot_postback', function(params, req, res, next){
  if (
    req.method === 'GET' 
  ) {
    verifyRequest(req, res);

    return false;
  }

  const messagingEvents = req.body.entry[0].messaging
  const pageFbId = req.body.entry[0].id;
  const payoutPattern = /pagar\s(\d+)\s/g;
  
  messagingEvents.forEach(event => {
    const text = event.message.text;
    const sender = event.sender.id;
    const page = Pages.findOne({
      id: pageFbId,
    });

    if (!_.has(event.message, 'text')) {
      return false;
    }

    if(!payoutPattern.test(text)){
      sendTextMessage({
        sender,
        text: 'Oi, para enviar dinheiro diga "pagar X reais"',
        pageAccessToken: page.access_token,
      });
    } else {
      sendTextMessage({
        sender,
        text: 'Botei fé!',
        pageAccessToken: page.access_token,
      });
    }
  });

  res.writeHead(200);
  res.end();
});
