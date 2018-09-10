class View {
    /**
     * @function constructor
     * @param seletor :: qual o id da tag html que vai ser alterado
     * @description :: ao instanciar uma nova View, é necessário declarar qual id da tag html
     */
    constructor(seletor) {
        this._elemento = $(seletor);
    }
    /**
     * @function update
     * @param model :: template string
     * @description :: método para atualizar a template string
     */
    update(model) {
        this._elemento.html(this.template(model));
    }
}
