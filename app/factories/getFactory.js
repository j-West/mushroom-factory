app.factory("getFactory", function($http) {

  function getShrooms() {
    return $http.get(`../../data/shrooms.json`)
  }


  return {
    getShrooms
  }
});


