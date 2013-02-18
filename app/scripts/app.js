angular.module('ngApp', []).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/', {templateUrl: '/app/views/index.html',   controller: 'GalleryCtrl'}).
      when('/jobs', {templateUrl: '/app/views/jobs.html',   controller: 'JobCtrl'}).
      when('/portfolio', {templateUrl: '/app/views/portfolio.html', controller: 'PortfolioCtrl'}).
      when('/education', {templateUrl: '/app/views/education.html', controller: 'EducationCtrl'}).
      when('/skills', {templateUrl: '/app/views/skills.html', controller: 'SkillsCtrl'}).
      when('/personal', {templateUrl: '/app/views/personal.html', controller: 'PersonalCtrl'}).
      when('/jobs/:jobId', {templateUrl: '/app/views/details.html', controller: 'JobDetailCtrl'}).
      when('/gallery', {templateUrl: '/app/views/gallery.html', controller: 'GalleryCtrl'}).

       when('/contact', {templateUrl: '/app/views/contact.html', controller: 'ContactCtrl'}).
      otherwise({redirectTo: '/app/views/index.html'});
}]);
