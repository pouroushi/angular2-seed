var patientApp = angular.module('patientApp', []);

patientApp.controller('PatientListCtrl', ['$scope', '$http', function ($scope, $http) {
    $http.get('data.json').success(function (data) {
        $scope.patients = data;
    });
    $scope.orderProp = 'id';
}]);