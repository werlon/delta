angular.module('primeiro')
    .controller('IndexController3', IndexController3);

IndexController3.$inject = ['$scope'];

/**
 * O scope é um ponteiro que chama o html (ponte do html)
 * @param $scope
 * @constructor
 */
function IndexController3($scope){
    /*
    os scopes sao como variáveis e devem ser setados primeiro e funções abaixo
     */

    $scope.listaDePessoas = [];
    $scope.listaBobos = {};
    $scope.entidade = {};

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;

    function salvar(){
        if($scope.formPessoa.$invalid === true){
            console.log('invalido');
            return;
        }
        //$scope.listaDePessoas.push($scope.entidade);
        $scope.listaDePessoas.push($scope.entidade);

        limpar();
    }

    function limpar(){
        $scope.entidade = {};
    }

    function excluir(posicao){
        $scope.listaDePessoas.splice(posicao,1);
    }

}
