/**
 * Created by Werlon on 14/01/2016.
 */
/**
 * Created by Werlon on 14/01/2016.
 * O service pode ser reutilizado em várias partes
 * diferente do controler que é privado
 *
 * nao tem scope faz praticamente o mesmo do service
 * lá no messages eu desativo os toastr no messages js
 * e importo o alert-servicesjs no html
 *
 */
angular.module('primeiro').factory('ParametrosDaAplicacao',ParametrosDaAplicacao);

/**
 * Sempre retorna um objeto
 * @returns {{nomeDoUsuario: string, email: string, logado: boolean}}
 * @constructor
 */
function ParametrosDaAplicacao(){
    return {
        nomeDoUsuario: '',
        email: '',
        logado: false
    };
}