'use strict';
const Route = use('Route');

Route.get('/', 'HomeController.home');
Route.any('*', 'HomeController.unauthorized');
