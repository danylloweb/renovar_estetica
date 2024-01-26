'use strict';
const ServiceController = require("./ServiceController");
const Env   = use('Env');

/**
 * HomeController
 */
class HomeController extends ServiceController {
  /**
   * constructor
   */
  constructor() {
    super()
    this.urlDestiny  = Env.get('GATEWAY_URL');
  }
  /**
   *
   * @param request
   * @param response
   * @returns {Promise<*>}
   */
  async unauthorized({request, response}) {
    return response.unauthorized({message: 'unauthorized'});
  }

  async home({view}) {
    return view.render('home');
  }

  async servicespage({view}) {
    return view.render('service');
  }

  async microagulhamento({view}) {
    this.send(this.urlDestiny + 'register-click', 'POST', {Accept: 'application/json'}, {code:'PPU38CNRKCN'});
    return view.render('landingEbook.index');
  }

  async registerClickCheckout() {
    try {
      this.send(this.urlDestiny + 'register-click-checkout', 'POST', {Accept: 'application/json'}, {code:'PPU38CNRKCN'});
    } catch (error) {
      console.log(error)
    }
  }
}

module.exports = HomeController;
