import axios from 'axios';
import config from 'config';
import cookie from 'js-cookie';

const getToken = () => cookie.get('authToken');

export default (eReq) => {

  const client = axios.create({
    baseURL: IS_SERVER ? config.apiUrl : '/api',
    timeout: 20000,
  });

  client.interceptors.request.use(req => ({
    ...req,
    headers: {
      ...req.headers,
      'X-Api-Key': IS_SERVER ? eReq.cookies.authToken || '' : getToken(),
    },
  }));

  return client;

};
