'use strict';
const View = use('View')

/**
 * HomeController
 */
class HomeController {
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
}

module.exports = HomeController;
