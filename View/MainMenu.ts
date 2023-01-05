import { Supply } from "../Model/Supply";
import { SupplyManager } from "../Controller/SupplyManager";
var readlineSync = require('readline-sync');


export class MainMenu {
    menu = `
    1. Show supply list
    2. Find item
    3. Add item
    4. Edit item
    5. Remove item
    6. Exit
    `

    mainMenu() {
        let supplyManager = new SupplyManager();
        let isLoop = true;

        while (isLoop) {
            console.log(this.menu);
            let choice = +readlineSync.question('Pick your choice: ');
            switch (choice) {
                case 1:
                    console.table(supplyManager.showList());
                    break;
                case 2:
                    let inputName = readlineSync.question('Name: ');
                    let check = supplyManager.findByName(inputName);
                    if (check != -1) {
                        console.log(check)
                    } else {
                        console.log('[!!!] This Name is not available')
                    }

                        break;
                case 3:
                    let isLoop3 = true;
                    while (isLoop3) {
                        let inputID = readlineSync.question('ID: ');
                        let isIdExist = supplyManager.findById(inputID);
                        let no = -1;
                        if (isIdExist == no) {
                            let inputName = readlineSync.question('Name: ');
                            console.log('[i] Sector is one of A, B, C, D or E')
                            let inputSector: string;
                            let checkSector = /^[ABCDE]/g
                            do {
                                inputSector = readlineSync.question('Sector: ');
                                if (inputSector.match(checkSector) == null) {
                                    console.log('[!!!] Sector is one of A, B, C, D or E')
                                }
                            } while (inputSector.match(checkSector) != null)
                            let inputPrice = +readlineSync.question('Price: ');
                            let inputQuantity = +readlineSync.question('Quantity: ');
                            let inputDescription = readlineSync.question('Description: ');
                            let InputInnitiatedDate = `${new Date().getDate()}/${new Date().getMonth}/${new Date().getFullYear}`;
                            let newItem = new Supply(inputID, inputName, inputSector, inputPrice, inputQuantity, InputInnitiatedDate, inputDescription);
                            supplyManager.supplyList.push(newItem)

                        } else {
                            console.log('[!!!] This ID unavailable. Please try again');
                            continue;
                        }
                    }
                case 4:
                    let isLoop4 = true
                    while (isLoop4) {
                        let inputId = readlineSync.question('ID: ');
                        let isIdExist = supplyManager.findById(inputId);
                        let no = -1;
                        if (isIdExist != no) {
                            console.log('[!!!] This ID is not exist. Please try again');
                            continue;
                        } else {
                            let inputName = readlineSync.question('Name: ')
                            let inputSector = readlineSync.question('Sector: ')
                            let inputPrice = +readlineSync.question(' Price: ');
                            let inputQuantity = +readlineSync.question('Quantity: ');
                            let InputInnitiatedDate = `${new Date().getDate()}/${new Date().getMonth}/${new Date().getFullYear}`
                            let inputDescription = readlineSync.question('Description: ')
                            let newItem = new Supply(inputId, inputName, inputSector, inputPrice, inputQuantity, InputInnitiatedDate, inputDescription);
                            supplyManager.editItem(inputId, newItem)
                        }
                        break;
                    }
                case 5:
                    let isLoop5 = true;
                    while (isLoop5) {
                        let inputId = readlineSync.question('ID: ');
                        let isIdExist = supplyManager.findById(inputId);
                        let no = -1;
                        if (isIdExist == no) {
                            console.log('[!!!] This ID is not exist. Please try again');
                            continue;
                        } else {
                            supplyManager.removeItem(inputId);
                            console.log('Remove successful');
                            return this.mainMenu;


                        }
                    }
                    break;
                case 6:
                    return;

            }
        }

    }
}


