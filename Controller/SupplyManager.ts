import { Supply } from "../Model/Supply"

export class SupplyManager {
    supplyList: Supply[] = [];

    constructor() {
        this.supplyList.push(new Supply('A001', 'item A1', 'A', 20, 1000, '1/5/2023', 'item A'))
        this.supplyList.push(new Supply('B001', 'item B1', 'B', 10, 1000, '1/5/2023', 'item B'))
        this.supplyList.push(new Supply('C001', 'item C1', 'C', 100, 1000, '1/5/2023', 'item C'))
        this.supplyList.push(new Supply('D001', 'item D1', 'D', 100, 1000, '1/5/2023', 'item D'))
        this.supplyList.push(new Supply('E001', 'item E1', 'E', 100, 1000, '1/5/2023', 'item E'))
    }

    showList() {
        return this.supplyList;
    }


    findByName(name: string) {
        for (let i of this.supplyList) {
            let isNameExist = i.name.includes(name)
            if (isNameExist) {
                return i;
            } else return -1;
        }
    }

    findById(id: string): any {
        let notExist = -1;
        for (let i in this.supplyList) {
            if (id  == this.supplyList[i].id) {
                return +i;
            } else return notExist;
        }
    }

    addItem(newItem: Supply): void {
        this.supplyList.push(newItem);
    }

    editItem(id: string, updateItem: Supply) {
        let indexSupply = this.findById(id);
        let notExist = -1;
        if (indexSupply == notExist) {
            return notExist;
        } else {
            this.supplyList[indexSupply] = updateItem;
        }
    }

    removeItem(id: string) {
        let indexSupply = this.findById(id);
        let notExist = -1;
        if (indexSupply == notExist) {
            return notExist;
        } else {
            this.supplyList.splice(indexSupply, 1);
        }
    }
}