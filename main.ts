var readlineSync = require('readline-sync');
import { SupplyManager } from "./SupplyManager";
let supplyManager = new SupplyManager([])
while (true) {
    console.log(`1. Display item
2. Find item
3. Add item
4. Edit item
5. Delete item`)
    let choice = +readlineSync.question("Enter your choice: ")
    switch (choice) {
        case 1:
            supplyManager.displayItem();
            break;
        case 2:
            supplyManager.findByName();
            break;
        case 3:
            supplyManager.addItem();
            break;
        case 4:
            supplyManager.editItem();
            break;
        case 5:
            supplyManager.deleteItem();
            break;
    }
}