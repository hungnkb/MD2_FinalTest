var readlineSync = require('readline-sync');
import { Supply } from "./Supply";

export class SupplyManager {
    supplyList: Supply[]
    constructor(supplyList: Supply[]) {
        this.supplyList = supplyList
    }
    displayItem(): void {
        console.table(this.supplyList)
    }
    findbyName() {
        while (true) {
            let name = readlineSync.question("name: ");
            let check = new RegExp(name, "g");
            for (let i = 0; i < this.supplyList.length; i++) {
                if (check.test(this.supplyList[i].name) == true) {
                    return i;
                }
            }
            console.log("This name is not available, please try again");
        }
    }
    findByName() {
        let index = this.findbyName();
        console.table(this.supplyList[index]);
    }
    addItem(): void {
        let checkNumber = /^\d*$/g
        let id;
        while (true) {
            id = readlineSync.question("Id: ");
            if (checkNumber.test(id)) {
                break;
            }
            console.log("Wrong type of ID. Please try again");
        }
        let name = readlineSync.question("Name: ");
        let type = readlineSync.question("Sector: ");
        let price;
        while (true) {
            price = readlineSync.question("Price: ");
            if (checkNumber.test(price)) {
                break
            }
            console.log("Wrong type of price. Please try again");
        }
        let quantity;
        while (true) {
            let quantity = readlineSync.question("Quantity: ");
            console.log(checkNumber.test(quantity));
            if (checkNumber.test(quantity)) {
                break;
            }
            console.log("Wrong type of quantity. Please try again");
        }
        let description: string = readlineSync.question("Description: ");
        let addDay: string = new Date().toString();
        let item = new Supply(id, name, type, price, quantity, addDay, description);
        this.supplyList.push(item);
    }
    findbyID(): number {   
        while (true) {
            let id = readlineSync.question("Id: ")
            for (let i = 0; i < this.supplyList.length; i++) {
                if (this.supplyList[i].id == id) {
                    return i;
                }
            }
            console.log("This ID is not exist. Please try again")
        }
    }
    editItem(): void {
        let index = this.findbyID()
        this.supplyList[index].name = readlineSync.question("Name: ");
        this.supplyList[index].sector = readlineSync.question("Sector: ");
        this.supplyList[index].price = readlineSync.question("Price: ");
        this.supplyList[index].quantity = readlineSync.question("Quantity: ");
        this.supplyList[index].description = readlineSync.question("Description: ");
    }
    deleteItem() {
        let index = this.findbyID();
        this.supplyList.splice(index, 1);
    }
}