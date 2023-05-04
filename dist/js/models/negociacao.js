export class Negociacao {
    constructor(_data, //Usando underline pois getter não pode ter o mesmo nome do atributo
    quantidade, valor) {
        this._data = _data;
        this.quantidade = quantidade;
        this.valor = valor;
    }
    get volume() {
        return this.valor * this.quantidade;
    }
    get data() {
        const data = new Date(this._data.getTime());
        return data;
    }
}
