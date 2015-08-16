app.controller('worksIndexController', function($scope){
    
    $scope.fotos = [];
    for(var i = 0; i < 50; i++){
        var obj = {
            id : i,
            url : "../img/fabi-foto.jpg"
        }
        $scope.fotos.push(obj);
    }
});