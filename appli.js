(function () {
    angular.module('ballot', ['ngRoute']).config(function ($routeProvider) {
        $routeProvider.when('/', {
                templateUrl: 'templates/number.html',
            });        
            $routeProvider.when('/menu', {
                templateUrl: 'templates/menu.html',
            });
            $routeProvider.otherwise({ redirectTo: '/' });

    });


})();