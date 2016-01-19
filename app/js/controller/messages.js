angular.module('primeiro')
    .controller('IndexControllerMessages', IndexControllerMessages);

/*$scope, $timeout, toastr  e outros componentes deven ser registrado no inject e no controlador*/
/*observar. o toastr nao tem $ pois foi criado desta forma pelo desenvolvedor e por ser de terceiro
o $ referencia diretivas padrao do proprio angular*/
/*o toaster e o ngMessage precisam ser registrados onde é chamado o primeiro modulo do angular (primeiro-config.js)*/
//IndexControllerMessages.$inject = ['$scope','$timeout','toastr'];
/*substituido para usar nosso service e nossa factory*/
IndexControllerMessages.$inject = ['$scope','$timeout',
    'AlertService','$filter'];
/*
injetamos tambem o filter para ser usado dentro do controlador
 */
//function IndexControllerMessages($scope,$timeout,toastr){
function IndexControllerMessages($scope,$timeout,AlertService,$filter){
    $scope.listaDePessoas = [];
    $scope.entidade = {};
    $scope.ultimaDataSetada = '';

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;





    iniciar();
    /**
     * server para iniciar tudo que for necessario quando abre a tela
     */
    function iniciar(){
        $scope.gridOption = {
            data:'listaDePessoas',
            columnDefs:[
                {field:'nome',displayName:'Nome',width:100},
                {field:'sobrenome',displayName:'Sobrenome'},
                {field:'nascimento',displayName:'Data Nascimento',width:250, cellTemplate:'app/template/cell-template-date.html'}
            ]
        };
    }



    $scope.myClass = '';
    function salvar(){
        $scope.myClass='vermelho';
        setarTouchedNosInputs();
        if($scope.formPessoa.nome.$invalid === true){
            AlertService.showError("Nome","Erro")
            /*toastr.error("Nome","Erro")*/
            console.log('Nome invalido');
            return;
        }
        if($scope.formPessoa.sobrenome.$invalid === true){
            AlertService.showInfo("Sobrenome","Erro")
            console.log('Sobrenome invalido');
            return;
        }
        if($scope.formPessoa.nascimento.$invalid === true){
            AlertService.showWarning("Data","Erro")
            console.log('Data Nascimento invalido');
            return;
        }
        var data = $scope.entidade.nascimento;
        $scope.ultimaDataSetada = $filter('date')(data,'dd/MM/yyyy');

        $scope.listaDePessoas.push($scope.entidade);
        AlertService.showSuccess("Salvo","OK")
        limpar();
    }

    function limpar(){
        $scope.myClass='azul';
        $scope.entidade = {};

        $timeout(function(){
            setarUnTouchedNosInputs();
        },600);
        /*assim como scope, tem que inserir o timeout no injection*/

        /*setarUnTouchedNosInputs();*/
    }

    function excluir(posicao){
        $scope.listaDePessoas.splice(posicao,1);
    }

    function setarTouchedNosInputs(){
        /*
        angular.forEach(array,function(propriedadeOuItemDoArray, nomeDaPropriedade){
        })
        */

        angular.forEach($scope.formPessoa.$error,function(erros){
            angular.forEach(erros,function(fields){
                fields.$setTouched();
            });
        })
    }
    function setarUnTouchedNosInputs(){
        angular.forEach($scope.formPessoa.$error,function(erros){
            angular.forEach(erros,function(fields){
                fields.$setUntouched();
            });
        })
    }

}
