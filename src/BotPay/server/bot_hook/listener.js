import _ from 'lodash';
import { Picker } from 'meteor/meteorhacks:picker';
import Pages from '../../collections/pages';
import { HTTP } from 'meteor/http';
import querystring from 'querystring';
import {
  verifyRequest,
  sendTextMessage,
  sendTextButtonMessage,
} from '../lib/messenger';

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
    if (!_.has(event.message, 'text')) {
      return false;
    }

    const text = event.message.text;
    const sender = event.sender.id;
    const page = Pages.findOne({
      id: pageFbId,
    });

    if(!payoutPattern.test(text)){
      sendTextMessage({
        sender,
        text: 'Oi, para enviar dinheiro diga "pagar X reais"',
        pageAccessToken: page.access_token,
      });
    } else {
      sendTextButtonMessage({
        sender,
        title: 'Clique aqui para efetuar seu pagamento',
        buttons: [
          {
            type: 'web_url',
            url: 'https://www.simplify.com/commerce/masterPass/index?key=sbpb_YTc4MjNmMTQtZGVmYi00MzY5LTllNmQtYzA1MzliY2I4MjJh&token=',
            title: 'Pagar com MasterPass',
          },
        ],
        pageAccessToken: page.access_token,
      });
    }
  });

  res.writeHead(200);
  res.end();
});
