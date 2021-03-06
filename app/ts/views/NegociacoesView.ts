import { Negociacoes } from './../models/Negociacoes';
import { View } from './View';

export class NegociacaoView extends View<Negociacoes>{

    template(model: Negociacoes): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>

            <tbody>
                ${model.paraArray().map(negociacao => 
                    `<tr>
                        <td>${negociacao._data.getDate()}/${negociacao._data.getMonth()+1}/${negociacao._data.getFullYear()}</td>
                        <td>${negociacao._quantidade}</td>
                        <td>${negociacao._valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr>`
                ).join('')}
            </tbody>

            <tfoot>
            </tfoot>
        </table> 
        `;
    }
}

