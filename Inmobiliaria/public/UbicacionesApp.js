var ngApp = angular.module('UbicacionesApp', []);

ngApp.controller('myController', function($scope, $http) {

    $scope.msg = '¡Realiza tu registro con exito! ';

    $scope.getData = function() {
        return 'qubernet';
    }
    $scope.createTodo = function() {
        $http
            .post("http://localhost:3000/insertubicacion", $scope.formData)
            .then(function successCallback(response) {
                // $scope.formData = {};
                $scope.todos = response.data;
                console.log(response);
            })
    };
})
