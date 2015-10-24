'use strict';

/* App Module */
// create the module and name it scotchApp
        // also include ngRoute for all our routing needs
    var app = angular.module('scotchApp', ['ngRoute','homeModule','TitleCaseFilter']);

    app.config(function($routeProvider){


        $routeProvider
            .when('/home',{
                  templateUrl: '/TestJSP/jsp/home.html',
                      controller  : 'HomeCtrl'
            });
           
  });
