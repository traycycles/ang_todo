/**
 * Created by tracy on 7/19/2016.
 */
'use strict';
angular.module('ang_todo')
.controller('mainCtrl', function($scope, dataService){ /*passing name of the directive method, callback function*/
    /*to access the service's methods, first define the service as a dependency in the controller so use as a param in the controller's callback function */

    $scope.addTodo = function(){
        var todo = {name: "This is a new todo."};
        $scope.todos.unshift(todo); /*unshift adds to beginning of list instead of end (push)*/
    };

    $scope.helloConsole = dataService.helloConsole;

    dataService.getTodos(function(response){
        console.log(response.data);
        $scope.todos = response.data; /* todos */
    });

    $scope.deleteTodo = function(todo, $index){
        dataService.deleteTodo(todo);
        $scope.todos.splice($index, 1);
    };

    $scope.saveTodo = function(todo){
        dataService.saveTodo(todo);
    };

});
