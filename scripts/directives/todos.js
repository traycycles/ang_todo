/**
 * Created by tracy on 7/20/2016.
 */

angular.module('ang_todo')
    .directive('todos', function(){ //1st param is name of directive
        return{
            templateUrl: 'templates/todos.html', //loads html file as a directive template
            controller: 'mainCtrl'
            // replace: true
                         // --optional  ...replaces the todo directive tags and injects template
        }
    });
