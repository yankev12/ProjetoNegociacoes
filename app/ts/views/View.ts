export abstract class View<T> { //considera a class de um tipo generico, dessa forma que os seus filhos acessem 
                //o método e possas passar um parâmetro que não seja do tipo string neste exemplo
                //seria o tipo Negociacao na class MensagemView e NegociacoesView
    private _elemento: JQuery;
    /**
     * @function constructor
     * @param seletor :: qual o id da tag html que vai ser alterado
     * @description :: ao instanciar uma nova View, é necessário declarar qual id da tag html
     */
    constructor(seletor: string){
        this._elemento = $(seletor);
    }
    /**
     * @function update
     * @param model :: template string
     * @description :: método para atualizar a template string 
     */
    update(model: T): void{
        this._elemento.html(this.template(model));
    }
    /**
     * @function template
     * @param model :: template string
     * @description :: método abstrato que os filhos são obrigados a implementá-lo
     * se não há um erro de implementação o próprio visual studio já mostra o erro
     * método que retorna a template string
     */
    abstract template(model: T): string;
}


