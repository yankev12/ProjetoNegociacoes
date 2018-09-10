class View<T> { //considera a class de um tipo generico, dessa forma que os seus filhos acessem 
                //o método e possas passar um parâmetro que não seja do tipo string neste exemplo
                //seria o tipo Negociacao na class MensagemView e NegociacoesView
    protected _elemento: Element;

    constructor(seletor: string){
        this._elemento = document.querySelector(seletor);
    }

    update(model: T): void{
        this._elemento.innerHTML = this.template(model);
    }

    template(model: T): string{
        throw new Error('Você deve implementa o método template');
    }
}