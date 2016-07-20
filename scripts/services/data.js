/**
 * Created by tracy on 7/20/2016.
 */
'use strict';
angular.module('ang_todo')

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