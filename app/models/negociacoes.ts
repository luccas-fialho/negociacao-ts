import { Negociacao } from "./negociacao.js";

//Modelo de Negociações, não é permitido mudar a lista de negociações nem a negociação em si depois de criada(s)
export class Negociacoes {
    //private negociacoes: Array<Negociacao> = [];
    private negociacoes: Negociacao[] = [];
    
    adiciona(negociacao: Negociacao): void {
        this.negociacoes.push(negociacao);
    }

    //Lista somente leitura, não permite que seja modificada
    //lista(): ReadonlyArray<Negociacao> {
    lista(): readonly Negociacao[] {
        return this.negociacoes;
    }
}
