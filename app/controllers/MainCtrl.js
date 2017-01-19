app.controller("MainCtrl", function($scope, getFactory) {
  console.log("MainCtrl")

  getFactory.getShrooms().then(function (data) {
    $scope.shrooms = data.data.mushrooms
    console.log($scope.shrooms);
  })

});