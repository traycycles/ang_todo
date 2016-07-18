/**
 * Created by tracy on 7/17/2016.
 */
angular.module("thToDo",[] )
.controller('mainCtrl', function($scope){ /*passing name of the directive method, callback function*/
    $scope.helloWorld = function(){
        console.log("hello there. This is the helloWorld controller function in the mainCtrl!");
    };
});