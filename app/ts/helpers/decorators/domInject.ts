export function domInject (seletor: string){
    return function(target: any, key: any){
        let elemento: JQuery;
        const getter = function(){
            if(!elemento){
                console.log(`buscando o ${seletor} para injetar em ${key}`);
                elemento = $(seletor);
            }
            return elemento
        }

        Object.defineProperty(target, key, {
            get: getter
        });
    };
}
