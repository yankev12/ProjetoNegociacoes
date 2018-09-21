import { Negociacao, Negociacoes } from './../models/index';
import { MensagemView, NegociacaoView } from './../views/index';
import { logarTempoDeExecucao } from './../helpers/decorators/index';

export class NegociacaoController {

    private _inputData: JQuery;
    private _inputValor: JQuery;
    private _inputQuantidade: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacaoView('#negociacoesView', true);
    private _mensagemView = new MensagemView('#mensagemView');

    constructor(){
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');
        this._negociacoesView.update(this._negociacoes);
        let teste = false;
    }
    @logarTempoDeExecucao()
    adiciona(event: Event){
        
        event.preventDefault(); //evita que a página seja recarregada
        let data = new Date(this._inputData.val().replace(/-/g, ','));
        if(!this._ehDiaUtil(data)){
            this._mensagemView.update('Somente negoiciações podem ser realizados nos dias úteis da semana');
            return
        }
        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/g, ',')),
            parseFloat(this._inputValor.val()),
            parseInt(this._inputQuantidade.val())
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('negociacao cadastrada com sucesso');
        
    }

    private _ehDiaUtil(date: Date){
        return date.getDay() != DiaDaSemana.Domingo && date.getDay() != DiaDaSemana.Sabado;
    }
}

enum DiaDaSemana{
    Domingo,
    Segunda,
    Terca,
    Quarta,
    Quinta,
    Sexta,
    Sabado
}