angular.module('primeiro')
    .controller('IndexController', IndexController);
/*acima registrei o controlador*/
/*se for inserido inline
    .controller('IndexController', function($scope){});
se for inserido injecao inline
    .controller('IndexController', ['$scope',function($scope){}]);*/
/*abaixo criei o controlador*/
/*
 * Padronizamos os nomes como nome de Class  NomeSobrenome
 */
/**
 * O scope é um ponteiro que chama o html (ponte do html)
 * @param $scope
 * @constructor
 */
function IndexController($scope){
    /*
    os scopes sao como variáveis e devem ser setados primeiro e funções abaixo
     */
    $scope.nome = 'Werlon';
    $scope.testeFuncao = testeFuncao;

    /*
    funcao dentro de funcao fica como privada e só posso acessar pelo nome ligado no scope
     */
    function testeFuncao(){
        alert('Olá ' + $scope.nome);
    }
}
/*
    poderia ser assim (funcao inline)
    angular.module('delta').controller('IndexController',function(){...});
    o problema de inline é que a funcao só é reconhecida por linhas abaixo dela

    funçoes soltas podem ser chamdas antes, depois e dentro dela;
*/

function algumaCoisa(par1, par2){

}

/*
JavaScript permite coisas erradas
function minha(par1,par2){
    alert ('algo');
    return par1+par2;
}
var a = minha;
var b = a();
*/