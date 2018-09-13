System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View;
    return {
        setters: [],
        execute: function () {
            View = class View {
                constructor(seletor) {
                    this._elemento = document.querySelector(seletor);
                }
                update(model) {
                    this._elemento.innerHTML = this.template(model);
                }
            };
            exports_1("View", View);
        }
    };
});
