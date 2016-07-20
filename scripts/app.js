/**
 * Created by tracy on 7/17/2016.
 */
angular.module("ang_todo",[] )

.controller('mainCtrl', function($scope, dataService){ /*passing name of the directive method, callback function*/
/*to access the service's methods, first define the service as a dependency in the controller so use as a param in the controller's callback function */

    $scope.learningNgChange = function(){
        console.log("An input changed");
    };

    $scope.helloConsole = dataService.helloConsole;

    dataService.getTodos(function(response){
        console.log(response.data);
        $scope.todos = response.data; /* todos */
    });

    })
    /* 'method chaining' is chaining one method after another... totally allowed */
.service('dataService', function ($http) { /*passing name of service, and callback*/

    this.helloConsole= function(){
        console.log('This is the hello console service');
    };

    this.getTodos = function(callback){
        $http.get('mock/todos.json')
        .then(callback)
    }

});

