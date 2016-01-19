angular.module('primeiro',['ngMessages','toastr','ui.grid','ngMaterial','ui.router','oc.lazyLoad']).config(config);

config.$inject = ['$stateProvider','$urlRouterProvider'];
function config($stateProvider,$urlRouterProvider){
    $urlRouterProvider.otherwise("/home");
    /*se usuario digitar endreço errado sera direcionado para home*/

    var home = {url:'/home',templateUrl:'app/view/home/home.html'};
    var menu = {url:'/menu',templateUrl:'app/view/menu/menu.html'};
    var cadastroPessoa = {url:'/cadastro-pessoa',templateUrl:'app/view/pessoa/cadastro-pessoa.html',
        resolve:{
            deps: function ($ocLazyLoad){
                return $ocLazyLoad.load('app/view/pessoa/cadastro-pessoa-controllergi .js')
            }
        }
    };
    var pesquisaPessoa = {url:'/pesquisa-pessoa',templateUrl:'app/view/pessoa/pesquisa-pessoa.html',
        resolve:{
            deps: function ($ocLazyLoad){
                return $ocLazyLoad.load('app/view/pessoa/pesquisa-pessoa-controller.js')
            }
        }
    };


    /*o resolve pega as dependencias informadas usando lo ocLazyLoad
    o ocLazy importa o javascript dinamicamente*/

    $stateProvider.state('home',home);
    $stateProvider.state('menu',menu);
    $stateProvider.state('cadastroPessoa',cadastroPessoa);
    $stateProvider.state('pesquisaPessoa',pesquisaPessoa);

}
/*
se fosse usar separado ngAnimate, ngAria deveriam ser registrados,
    porem o ngMaterial ja faz isso*/
