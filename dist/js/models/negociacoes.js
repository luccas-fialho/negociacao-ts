//Modelo de Negociações, não é permitido mudar a lista de negociações nem a negociação em si depois de criada(s)
export class Negociacoes {
    constructor() {
        //private negociacoes: Array<Negociacao> = [];
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    //Lista somente leitura, não permite que seja modificada
    //lista(): ReadonlyArray<Negociacao> {
    lista() {
        return this.negociacoes;
    }
}
