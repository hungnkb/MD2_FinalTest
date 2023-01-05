export class Supply {
    id: number
    name: string
    sector: string
    price: number
    quantity: number
    addDay: string
    description: string
    constructor(id: number, name: string, sector: string, price: number, quantity: number, addDay: string, description: string) {
        this.id = id
        this.name = name
        this.sector = sector
        this.price = price
        this.quantity = quantity
        this.addDay = addDay
        this.description = description
    }
}