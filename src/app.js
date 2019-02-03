
var app = angular.module('indexExemplo', ['ui.router', 'ngRoute'])
.run(function ($rootScope) {

  $rootScope.muda = function () {
    $rootScope.$broadcast('muda-cor')
  }

  // $rootScope.apply()

}).config([ '$stateProvider', '$locationProvider', '$routeProvider', function($stateProvider, $locationProvider, $routeProvider){
  $locationProvider.hashPrefix('!');

  $routeProvider
  .when("/", {templateUrl: './templates/base.html', controller: "base as vm"})
  .when('/contact', {templateUrl: './templates/contact.html', controller: 'contact as vm'})
  .otherwise({redirectTo: '/unauthorized'});


  // $stateProvider.state('base', {
  //   baseUrl: './base.html',
  //   route: '/base',
  //   controller: 'base as vm',
  //   data: {
  //     auth: true
  //   }
  // })
}])
