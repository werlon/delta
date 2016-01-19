angular.module('primeiro')
    .controller('IndexControllerRouter', IndexControllerRouter);

IndexControllerRouter.$inject = ['$scope','$timeout','AlertService','$filter'];
function IndexControllerRouter($scope,$timeout,AlertService,$filter){
    $scope.listaDePessoas = [];
    $scope.entidade = {};
    $scope.ultimaDataSetada = '';
    $scope.onClickEditar = onClickEditar;
    $scope.getRowStyle = getRowStyle;


    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;

    iniciar();

    function iniciar(){
        $scope.gridOption = {
            data:'listaDePessoas',
            columnDefs:[
                {field:'nome',displayName:'Nome',width:100},
                {field:'sobrenome',displayName:'Sobrenome'},
                {field:'nascimento',displayName:'Data Nascimento',width:250, cellTemplate:'app/template/cell-template-date.html'},
                {field:'editar',displayName:'',width:50, cellTemplate:'app/template/cell-template-editar.html'}
            ],
            rowTemplate: 'app/template/row-template.html'
        };
    }

    $scope.myClass = '';
    function salvar(){
        $scope.myClass='vermelho';
        setarTouchedNosInputs();

        if($scope.formPessoa.nome.$invalid === true){
            AlertService.showError("Nome","Erro");
            console.log('Nome invalido');
            return;
        }

        if($scope.formPessoa.sobrenome.$invalid === true){
            AlertService.showInfo("Sobrenome","Erro");
            console.log('Sobrenome invalido');
            return;
        }

        if($scope.formPessoa.nascimento.$invalid === true){
            AlertService.showWarning("Data","Erro");
            console.log('Data Nascimento invalido');
            return;
        }

        var datanasci = $scope.entidade.nascimento;
        $scope.ultimaDataSetada = $filter('date')(datanasci,'dd/MM/yyyy');

        $scope.listaDePessoas.push($scope.entidade);
        AlertService.showSuccess("Salvo","OK");
        limpar();
    }

    function limpar(){
        $scope.myClass='azul';
        $scope.entidade = {};

        $timeout(function(){
            setarUnTouchedNosInputs();
        },600);
    }

    function excluir(posicao){
        $scope.listaDePessoas.splice(posicao,1);
    }

    function setarTouchedNosInputs(){
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

    function onClickEditar(linhaSelecionada){
        $scope.entidade = linhaSelecionada;
    }

    function getRowStyle(linhaSelecionada){
        var style = {};
        style.backgroundColor = linhaSelecionada.cor;
        style.color = 'yellow';
        return style;
    }

}
