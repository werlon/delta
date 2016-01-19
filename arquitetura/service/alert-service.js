/**
 * Created by Werlon on 14/01/2016.
 * O service pode ser reutilizado em várias partes
 * diferente do controler que é privado
 *
 * nao tem scope
 * lá no messages eu desativo os toastr no messages js
 * e importo o alert-servicesjs no html
 *
 */
angular.module('primeiro').service('AlertService',AlertService);

AlertService.$inject = ['toastr'];

/*acoplamos varios tipos de modulos que será aplicada a toda chamada*/
function AlertService(toastr){
    this.showSuccess = showSuccess;
    this.showError = showError;
    this.showWarning = showWarning;
    this.showInfo = showInfo;
    /*
    Quando implementamos o toastr este service fará o comportamento
    do plugin injetado, mas podem receber vários outros e/ou substituir
    por versões diferentes, bastando injetar e implementar o novo plugin
    no lugar do atuar (toastr)
     */
    function showSuccess(mensagem, titulo){
        if(!titulo){
            titulo = 'Sucesso ';
            /*verifica se vazio, null, undefined*/
        }

        /*podemos mudar as configuraçoes no terceiro parametro*/
        var configuracao = {};
        configuracao.progressBar = true;
        toastr.success(mensagem,titulo,configuracao);
        toastr.success(mensagem,titulo);
    }


    function showError(mensagem, titulo){
        if(!titulo){
            titulo = 'Erro ';
            /*verifica se vazio, null, undefined*/
        }

        /*terceiro parametro direto*/
        toastr.error(mensagem,titulo,{progressBar:true});
        /*toastr.error(mensagem,titulo);*/
    }


    function showWarning(mensagem, titulo){
        if(!titulo){
            titulo = 'Atenção ';
            /*verifica se vazio, null, undefined*/
        }

        var configuracao = {};
        configuracao.progressBar = true;
        toastr.warning(mensagem,titulo,configuracao);
    }


    function showInfo(mensagem, titulo){
        if(!titulo){
            titulo = 'Informação ';
            /*verifica se vazio, null, undefined*/
        }


        toastr.info(mensagem,titulo,{progressBar:true});
        /*toastr.info(mensagem,titulo);*/
    }

}