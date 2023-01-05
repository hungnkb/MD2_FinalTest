var readlineSync = require('readline-sync');
import { Item } from "./Supply";
export class ItemManager {
    supplyList: Item[]
    constructor(itemList: Item[]) {
        this.supplyList = itemList
    }
    displayItem(): void {
        console.table(this.supplyList)
    }
    findbyName() {
        while (true) {
            let name = readlineSync.question("name: ")
            let re = new RegExp(name, "g")
            for (let i = 0; i < this.supplyList.length; i++) {
                if (re.test(this.supplyList[i].name) === true) {
                    return i
                }
            }
            console.log("Name is not available, please try again")
        }
    }
    findItem() {
        let index = this.findbyName()
        console.table(this.supplyList[index])
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
        this.supplyList.push(item)
    }
    findbyID(): number {
        let id: number
        while (true) {
            id = readlineSync.question("Enter id of item you want to edit: ")
            for (let i = 0; i < this.supplyList.length; i++) {
                if (this.supplyList[i].id == id) {
                    return i
                }
            }
            console.log("ID is not existed, please try again")
        }
    }
    editItem(): void {
        let index: number = this.findbyID()
        this.supplyList[index].name = readlineSync.question("Enter name: ")
        this.supplyList[index].type = readlineSync.question("Enter type: ")
        this.supplyList[index].price = readlineSync.question("Enter price: ")
        this.supplyList[index].quantity = readlineSync.question("Enter quantity: ")
        this.supplyList[index].description = readlineSync.question("Enter description: ")
    }
    deleteItem() {
        let index: number = this.findbyID()
        this.supplyList.splice(index, 1)
    }
}