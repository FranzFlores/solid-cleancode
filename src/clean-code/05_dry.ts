type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ) { }

    isProductReady(): boolean {
        // recorrer las propiedades de la clase 
        for (const key in this) {
            switch (typeof this[key]) {
                case 'string':
                    if ((<string><unknown>this[key]).length <= 0) throw new Error(`${key} está vacío`);
                    break;
                case 'number':
                    if ((<number><unknown>this[key]) <= 0) throw new Error(`${key} es cero`);
                    break;
                default:
                    throw new Error(`${typeof this[key]} is not supported`);       
            }
        }

        return true;
    }

    toString() {
        if (!this.isProductReady()) return;
        return `${this.name} (${this.price}) , ${this.size}`;
    }
}

(() => {
    const bluePants = new Product('Pantalones Azules', 10, 'M');
    console.log(bluePants.toString());
})();