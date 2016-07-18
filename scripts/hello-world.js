/**
 * Created by tracy on 7/17/2016.
 */
angular.module('thToDo')/*no 2nd param... otherwise angular will create a new module, instead using the thToDo module (app)*/
/*below attaching a new directive to the module param#1= name of directive in camelcase, param#2 callback function*/
    .directive('helloWorld', function(){
      return{
          /*JSON key=>value*/
          template:"This is the 'helloWorld' directive!!!",
          /*only be used as an element or attribute*/
          restrict:"E"

      };
    });

/*this directive goes in to index.html file as a tag*/