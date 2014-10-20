angular.module( 'sample.home', [
  'ui.router',
  'angular-storage'
])
.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '/',
    controller: 'HomeCtrl',
    templateUrl: 'home/home.html'
  });
})
.controller( 'HomeCtrl', function HomeController( $scope, $http, store) {

  $scope.jwt = store.get('jwt');

  $scope.callAnonymousApi = function() {
    // Just call the API as you'd do using $http
    callApi('Anonymous', 'http://localhost:3001/api/random-quote');
  }

  $scope.callSecuredApi = function() {
    callApi('Secured', 'http://localhost:3001/api/protected/random-quote');
  }

  function callApi(type, url) {
    $scope.response = null;
    $scope.api = type;
    $http({
      url: url,
      method: 'GET'
    }).then(function(quote) {
      $scope.response = quote.data;
    }, function(error) {
      $scope.response = error.data;
    });
  }

});
