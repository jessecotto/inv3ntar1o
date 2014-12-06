'use strict';

angular
  .module('inventarioApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'firebase'
  ])


    .value('fbURL', 'https://invent1.firebaseio.com/')
    .factory('Product', function (fbURL, $firebase) {
        return $firebase(new Firebase(fbURL)).$asArray();
    })


  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .when('/edit/:id', {
          templateUrl: 'views/edit.html',
          controller: 'EditCtrl'
      })


      .otherwise({
        redirectTo: '/'
      });
  });


