var readlineSync = require('readline-sync');
import { Item } from "./Supply";

export class SupplyManager {
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
            let check = new RegExp(name, "g")
            for (let i = 0; i < this.supplyList.length; i++) {
                if (check.test(this.supplyList[i].name) == true) {
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
            id = readlineSync.question("Id: ")
            if (numbertest.test(id)) {
                break
            }
            console.log("ID must be a number")
        }
        let name = readlineSync.question("Name: ")
        let type = readlineSync.question("Sector : ")
        let price;
        while (true) {
            price = readlineSync.question("Price: ")
            if (numbertest.test(price)) {
                break
            }
            console.log("Wrong type of Price. Please try again")
        }
        let quantity
        while (true) {
            quantity = readlineSync.question("Quantity: ")
            console.log(numbertest.test(quantity))
            if (numbertest.test(quantity)) {
                break
            }
            console.log("Quantity must be a number")
        }
        let description: string = readlineSync.question("Description: ")
        let addDay: string = new Date().toString()
        let item = new Item(id, name, type, price, quantity, addDay, description)
        this.supplyList.push(item)
    }
    findbyID(): number {
        let id: number
        while (true) {
            id = readlineSync.question("Id: ")
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
        this.supplyList[index].name = readlineSync.question("Name: ")
        this.supplyList[index].sector = readlineSync.question("Sector: ")
        this.supplyList[index].price = readlineSync.question("Price: ")
        this.supplyList[index].quantity = readlineSync.question("Quantity: ")
        this.supplyList[index].description = readlineSync.question("Description: ")
    }
    deleteItem() {
        let index: number = this.findbyID()
        this.supplyList.splice(index, 1)
    }
}