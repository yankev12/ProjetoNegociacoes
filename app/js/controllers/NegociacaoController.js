<<<<<<< HEAD
System.register(["./../models/index", "./../views/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_1.Negociacoes();
                    this._negociacoesView = new index_2.NegociacaoView('#negociacoesView');
                    this._mensagemView = new index_2.MensagemView('#mensagemView');
                    this._inputData = document.querySelector('#data');
                    this._inputValor = document.querySelector('#valor');
                    this._inputQuantidade = document.querySelector('#quantidade');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault(); //evita que a página seja recarregada 
                    const negociacao = new index_1.Negociacao(new Date(this._inputData.value.replace(/-/, '/')), parseFloat(this._inputValor.value), parseInt(this._inputQuantidade.value));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('negociacao cadastrada com sucesso');
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
=======
class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacaoView('#negociacoesView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputData.val().replace(/-/, '/')), parseFloat(this._inputValor.val()), parseInt(this._inputQuantidade.val()));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('negociacao cadastrada com sucesso');
    }
}
>>>>>>> TypeScript_definitions
