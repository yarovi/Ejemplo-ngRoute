var app=angular.module('Blog',['ngRoute']);
  app.config(function($routeProvider){
    $routeProvider.when("/",{
      templateUrl:"views/home.html"
    })
    .when("/aboutme",{
      templateUrl:"views/aboutme.html"
    })
    .when("/post",{
      templateUrl:"views/post.html"
    })
    .when("/contact",{
      templateUrl:"views/contact.html"
    })
    .otherwise(redirecTo:"/")
  });
