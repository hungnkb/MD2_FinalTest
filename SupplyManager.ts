var readlineSync = require('readline-sync');
import { Item } from "./Item";
export class ItemManager {
    item_list: Item[]
    constructor(item_list: Item[]) {
        this.item_list = item_list
    }
    displayItem(): void {
        if (this.item_list.length == 0) {
            console.log("No detail")
            return
        }
        console.table(this.item_list)
    }
    findbyName() {
        while (true) {
            let name = readlineSync.question("name: ")
            let re = new RegExp(name, "g")
            for (let i = 0; i < this.item_list.length; i++) {
                if (re.test(this.item_list[i].name) === true) {
                    return i
                }
            }
            console.log("Name is not existed, please try again")
        }
    }
    findItem() {
        let index = this.findbyName()
        console.table(this.item_list[index])
    }
    addItem(): void {
        let numbertest = /^\d*$/g
        let id
        while (true) {
            id = readlineSync.question("Enter id of item you want to add?: ")
            if (numbertest.test(id)) {
                break
            }
            console.log("ID must be a number")
        }
        let name: string = readlineSync.question("Enter name of item you want to add?: ")
        let type: string = readlineSync.question("Enter type of item you want to add?: ")
        let price
        while (true) {
            price = readlineSync.question("Enter price of item you want to add?: ")
            if (numbertest.test(price)) {
                break
            }
            console.log("Price must be a number")
        }
        let quantity
        while (true) {
            quantity = readlineSync.question("Enter quantity of item you want to add?: ")
            console.log(numbertest.test(quantity))
            if (numbertest.test(quantity)) {
                break
            }
            console.log("Quantity must be a number")
        }
        let description: string = readlineSync.question("Enter description of item you want to add?: ")
        let addDay: string = new Date().toString()
        let item = new Item(id, name, type, price, quantity, addDay, description)
        this.item_list.push(item)
    }
    findbyID(): number {
        let id: number
        while (true) {
            id = readlineSync.question("Enter id of item you want to edit: ")
            for (let i = 0; i < this.item_list.length; i++) {
                if (this.item_list[i].id == id) {
                    return i
                }
            }
            console.log("ID is not existed, please try again")
        }
    }
    editItem(): void {
        let index: number = this.findbyID()
        this.item_list[index].name = readlineSync.question("Enter name: ")
        this.item_list[index].type = readlineSync.question("Enter type: ")
        this.item_list[index].price = readlineSync.question("Enter price: ")
        this.item_list[index].quantity = readlineSync.question("Enter quantity: ")
        this.item_list[index].description = readlineSync.question("Enter description: ")
    }
    deleteItem() {
        let index: number = this.findbyID()
        this.item_list.splice(index, 1)
    }
}