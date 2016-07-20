/**
 * Created by tracy on 7/17/2016.
 */
angular.module("ang_todo",[] )

.controller('mainCtrl', function($scope, dataService){ /*passing name of the directive method, callback function*/
/*to access the service's methods, first define the service as a dependency in the controller so use as a param in the controller's callback function */

    $scope.addTodo = function(){
        var todo = {name: "This is a new todo."};
        $scope.todos.push(todo);
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

    })
    /* 'method chaining' is chaining one method after another... totally allowed */
.service('dataService', function ($http) { /*passing name of service, and callback*/

    this.helloConsole= function(){
        console.log('This is the hello console service');
    };

    this.getTodos = function(callback){
        $http.get('mock/todos.json') /*similar to $_GET (PHP)*/
        .then(callback)
    };

    this.deleteTodo = function(todo){
        console.log ("The " + todo.name + " todo has been deleted!");
        //other logic
    };
    this.saveTodo = function (todo) {
      console.log("The " + todo.name + " todo has been saved!");
        //other logic
    };

});

