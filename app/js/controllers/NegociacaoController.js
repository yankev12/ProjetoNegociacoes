System.register(["./../views/NegociacoesView", "./../models/Negociacao", "./../models/Negociacoes", "./../views/MensagemView"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var NegociacoesView_1, Negociacao_1, Negociacoes_1, MensagemView_1, NegociacaoController;
    return {
        setters: [
            function (NegociacoesView_1_1) {
                NegociacoesView_1 = NegociacoesView_1_1;
            },
            function (Negociacao_1_1) {
                Negociacao_1 = Negociacao_1_1;
            },
            function (Negociacoes_1_1) {
                Negociacoes_1 = Negociacoes_1_1;
            },
            function (MensagemView_1_1) {
                MensagemView_1 = MensagemView_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new Negociacoes_1.Negociacoes();
                    this._negociacoesView = new NegociacoesView_1.NegociacaoView('#negociacoesView');
                    this._mensagemView = new MensagemView_1.MensagemView('#mensagemView');
                    this._inputData = document.querySelector('#data');
                    this._inputValor = document.querySelector('#valor');
                    this._inputQuantidade = document.querySelector('#quantidade');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault(); //evita que a página seja recarregada 
                    const negociacao = new Negociacao_1.Negociacao(new Date(this._inputData.value.replace(/-/, '/')), parseFloat(this._inputValor.value), parseInt(this._inputQuantidade.value));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('negociacao cadastrada com sucesso');
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
