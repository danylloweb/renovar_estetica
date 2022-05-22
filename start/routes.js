'use strict';
const Route = use('Route');


Route.any('/', 'CheckoutRestController.gatewaySyncLogged');
Route.any('*', 'CheckoutRestController.gatewaySyncLogged');
