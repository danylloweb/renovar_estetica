'use strict'
const client = use('request-promise');
/**
 * ServiceController
 */
class ServiceController {

  /**
   * sendGet
   * @param url
   * @param header
   * @returns {Promise<*>}
   */
  async sendGet(url, header)
  {
    return await client({method: 'GET', url: url, headers:header, json: true, rejectUnauthorized: false});
  }

  /**
   *
   * @param url
   * @param method
   * @param header
   * @param body
   * @returns {Promise<*>}
   */
  async send(url, method, header, body)
  {
    console.warn('enviando requisição...')
    let response = await client({method: method, url: url, headers: header, body: body, json: true, rejectUnauthorized: false});
    console.log(response);
    return response;
  }

}

module.exports = ServiceController
