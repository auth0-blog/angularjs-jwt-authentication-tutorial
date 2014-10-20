angular.module( 'sample', [
  'sample.home',
  'sample.login',
  'sample.signup'
])
.config( function myAppConfig ($urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
})
.controller( 'AppCtrl', function AppCtrl ( $scope, $location ) {
  $scope.$on('$routeChangeSuccess', function(e, nextRoute){
    if ( nextRoute.$$route && angular.isDefined( nextRoute.$$route.pageTitle ) ) {
      $scope.pageTitle = nextRoute.$$route.pageTitle + ' | ngEurope Sample' ;
    }
  });
})

;

