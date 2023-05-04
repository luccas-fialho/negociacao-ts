export class Negociacao {
    
    constructor(
        private _data: Date, //Usando underline pois getter não pode ter o mesmo nome do atributo
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    get volume(): number {
        return this.valor * this.quantidade;
    }

    get data(): Date {
        const data = new Date(this._data.getTime())
        return data;
    }
}