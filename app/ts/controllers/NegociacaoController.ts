class NegociacaoController {

    private _inputData: JQuery;
    private _inputValor: JQuery;
    private _inputQuantidade: JQuery;
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacaoView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor(){
        this._inputData = $('#data');
        this._inputValor = $('#valor');
        this._inputQuantidade = $('#quantidade');
        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event){
        
        event.preventDefault(); //evita que a página seja recarregada 
        const negociacao = new Negociacao(
            new Date(this._inputData.val().replace(/-/, '/')),
            parseFloat(this._inputValor.val()),
            parseInt(this._inputQuantidade.val())
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('negociacao cadastrada com sucesso');
        
    }
}