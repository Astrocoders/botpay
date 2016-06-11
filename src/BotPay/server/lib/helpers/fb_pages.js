import { HTTP } from 'meteor/http';

const api = 'https://graph.facebook.com/v2.6/me';

export default subscribeToPage(pageAccessToken){
  const endpoint = `subscribed_apps`;
  const request = HTTP.post(`${api}/${endpoint}`, {
    query: {
      access_token: pageAccessToken,
    },
  });


  if(request.data.success){
    return true;
  }
};
