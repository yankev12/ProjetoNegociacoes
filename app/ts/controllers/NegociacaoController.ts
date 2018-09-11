import { NegociacaoView } from './../views/NegociacoesView';
import { Negociacao } from './../models/Negociacao';
import { Negociacoes } from './../models/Negociacoes';
import { MensagemView } from './../views/MensagemView';

export class NegociacaoController {

    private _inputData: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacaoView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor(){
        this._inputData = <HTMLInputElement>document.querySelector('#data');
        this._inputValor = <HTMLInputElement>document.querySelector('#valor');
        this._inputQuantidade = <HTMLInputElement>document.querySelector('#quantidade');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event){
        
        event.preventDefault(); //evita que a página seja recarregada 
        const negociacao = new Negociacao(
            new Date(this._inputData.value.replace(/-/, '/')),
            parseFloat(this._inputValor.value),
            parseInt(this._inputQuantidade.value)
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('negociacao cadastrada com sucesso');
        
    }
}