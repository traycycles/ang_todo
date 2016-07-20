/**
 * Created by tracy on 7/17/2016.
 */
angular.module("ang_todo",[] )

.controller('mainCtrl', function($scope){ /*passing name of the directive method, callback function*/
    $scope.learningNgChange = function(){
        console.log("An input changed");
    };

    $scope.todos = [
        {"name": "clean the house"},
        {"name": "walk the dog"},
        {"name": "feed the lawn"},
        {"name": "pay bills"},
        {"name": "exercise"},
        {"name": "practice piano"}
    ]

    });