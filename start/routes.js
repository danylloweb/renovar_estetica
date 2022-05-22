'use strict';
const Route = use('Route');

Route.any('*', 'HomeController.unauthorized');
