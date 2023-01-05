export class Supply {
    id: string;
    name: string;
    sector: string;
    price: number;
    quantity: number;
    innitiatedDate: string;
    description: string;

    constructor(id: string,
        name: string,
        sector: string,
        price: number,
        quantity: number,
        innitiatedDate: string,
        description: string,) {
        this.id = id;
        this.name = name;
        this.sector = sector;
        this.price = price;
        this.quantity = quantity;
        this.innitiatedDate = innitiatedDate;
        this.description = description;
    }
}