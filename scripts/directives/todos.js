/**
 * Created by tracy on 7/20/2016.
 */

angular.module('ang_todo')
    .directive('todos', function(){
        return{
            templateUrl: 'templates/todos.html',
            controller: 'mainCtrl'
            // replace: true
                         // --optional  ...replaces the todo directive tags and injects template
        }
    });
