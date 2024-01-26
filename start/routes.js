'use strict';
const Route = use('Route');

Route.get('/', 'HomeController.home');
Route.get('/services', 'HomeController.servicespage');
Route.get('/ebook-micro-agulhamento', 'HomeController.microagulhamento');
Route.post('/registerClickCheckout', 'HomeController.registerClickCheckout');
Route.any('*', 'HomeController.unauthorized');
