import { HTTP } from 'meteor/http';
import querystring from 'querystring';

export function sendTextMessage({sender, text, pageAccessToken}) {
  HTTP.post('https://graph.facebook.com/v2.6/me/messages', {
    params: {
      access_token: pageAccessToken,
    },
    data: {
      recipient: {id:sender},
      message: { text },
    },
  });
}

export function sendTextButtonMessage({sender, title, buttons, pageAccessToken}) {
  HTTP.post('https://graph.facebook.com/v2.6/me/messages', {
    params: {
      access_token: pageAccessToken,
    },
    data: {
      recipient: {id:sender},
      message: {
        attachment: {
          type: 'template',
          payload: {
            template_type: 'button',
            text: title,
            buttons: buttons,
          },
        },
      },
    },
  });
}

export function verifyRequest(request, response){
  const queryParsed = querystring.parse(request._parsedUrl.query) || {};
  if(
    queryParsed['hub.verify_token'] === 'i_love_potatoes'
  ){
    response.end(queryParsed['hub.challenge'])
  } else {
    response.end('dont fool me');
  }
};
