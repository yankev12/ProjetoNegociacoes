class NegociacaoController {
    constructor() {
        this._negociacoes = new Negociacoes();
        this._negociacoesView = new NegociacaoView('#negociacoesView');
        this._mensagemView = new MensagemView('#mensagemView');
        this._inputData = document.querySelector('#data');
        this._inputValor = document.querySelector('#valor');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._negociacoesView.update(this._negociacoes);
    }
    adiciona(event) {
        event.preventDefault(); //evita que a página seja recarregada
        const negociacao = new Negociacao(new Date(this._inputData.value.replace(/-/, '/')), parseFloat(this._inputValor.value), parseInt(this._inputQuantidade.value));
        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('negociacao cadastrada com sucesso');
    }
}
