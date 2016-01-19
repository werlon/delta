/**
 * Created by Werlon on 14/01/2016.
 */
angular.module('primeiro')
    .filter('maiusculo',maiusculo);

function maiusculo(){
    /*input é o que vem para ser formatado*/
    return function(input){
      if(input && (typeof input === 'string')){
          return input.toUpperCase();
          //return angular.uppercase(input);
      }
        return input;
    }
}