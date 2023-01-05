export class Item {
    id: number
    name: string
    type: string
    price: number
    quantity: number
    addDay: string
    description: string
    constructor(id: number, name: string, type: string, price: number, quantity: number, addDay: string, description: string) {
        this.id = id
        this.name = name
        this.type = type
        this.price = price
        this.quantity = quantity
        this.addDay = addDay
        this.description = description
    }
}