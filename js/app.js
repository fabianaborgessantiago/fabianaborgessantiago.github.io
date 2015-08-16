var app = angular.module('App', ['ui.router', 'ngResource', 'ui.bootstrap']);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise("/");

    $stateProvider

    .state('home', {
        url: '/',
        templateUrl: '/views/home.html',
        controller: 'homeController'
    })
    
    .state('about', {
        url: '/about',
        templateUrl: '/views/about.html'
    })
    
    .state('contact', {
        url: '/contact',
        templateUrl: '/views/contact.html'
    })
    
    .state('works', {
        url: '/works',
        templateUrl: '/views/works/index.html',
        controller: 'worksIndexController'
    })
    
    .state('worksshow', {
        url: '/show/:id',
        templateUrl: '/views/works/show.html',
        controller: 'worksShowController'
    })

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});

