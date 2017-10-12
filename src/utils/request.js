import fetch from 'dva/fetch';
import hpFetch from './hpFetch';

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default async function request(url, options) {
  const response = await hpFetch(url, options);
  checkStatus(response);
  const data = JSON.parse(response.responseText);
  const ret = {
    data,
    headers: {},
  };
  if (response.getResponseHeader('x-total-count')) {
    ret.headers['x-total-count'] = response.getResponseHeader('x-total-count');
  }

  return ret;
}