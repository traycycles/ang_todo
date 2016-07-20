/**
 * Created by tracy on 7/17/2016.
 */
angular.module("ang_todo",[] )

.controller('mainCtrl', function($scope, dataService){ /*passing name of the directive method, callback function*/
/*to access the service's methods, first define the service as a dependency in the controller so use as a param in the controller's callback function */
    $scope.helloConsole = dataService.helloConsole

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

    })
    /* 'method chaining' is chaining one method after another... totally allowed */
.service('dataService', function () { /*passing name of service, and callback*/

    this.helloConsole= function(){
        console.log('This is the hello console service');
    }

});

