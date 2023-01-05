var readlineSync = require('readline-sync');
import { ItemManager } from "./ItemManager";
let itemmanager = new ItemManager([])
while (true) {
    console.log(`1. Display item
2. Find item
3. Add item
4. Edit item
5. Delete item`)
    let choice = +readlineSync.question("Enter your choice: ")
    switch(choice) {
        case 1:
            itemmanager.displayItem()
            break
        case 2:
            itemmanager.findItem()
            break
        case 3:
            itemmanager.addItem()
            break
        case 4:
            itemmanager.editItem()
            break
        case 5:
            itemmanager.deleteItem()
            break
    }
}