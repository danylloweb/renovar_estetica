'use strict';
const ServiceController = require("./ServiceController");
const Env               = use('Env');

/**
 * AuthController
 */
class AuthController extends ServiceController{
  /**
   * constructor
   */
  constructor() {
    super({urlDestiny:Env.get('MS_AUTH_URL'), prefix:'auth/'});
    this.urlDestiny = Env.get('MS_AUTH_URL');
  }

  /**
   * revokeToken
   * @param response
   * @param auth
   */
  async revokeToken({response, auth}) {
    const apiToken = auth.getAuthHeader();
    await auth.authenticator('jwt').revokeTokens([apiToken]);
    return response.json({error: false, message: 'user unauthenticated'});
  }


}

module.exports = AuthController;
