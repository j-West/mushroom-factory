app.config(($routeProvider, $locationProvider) => {
  $locationProvider.hashPrefix("");
  $routeProvider
    .when("/", {
      controller: "MainCtrl",
      templateUrl: "app/partials/main.html",
    })
});