type Size = '' | 'S' | 'M' | 'XL';

class Product {
    constructor(
        public name: string = '',
        public price: number = 0,
        public size: Size = ''
    ){ }

    toString() {
        // No se aplica DRY
        if (this.name.length <= 0) throw new Error("name is empty");
        if (this.price <= 0) throw new Error("price is zero");
        if (this.size.length <= 0) throw new Error("size is empty");
        return  `${this.name} (${this.price}) , ${this.size}`;
    }
}

(() => {
    const bluePants = new Product('Pantalones Azules', 10, 'M');
    console.log(bluePants.toString());
})();