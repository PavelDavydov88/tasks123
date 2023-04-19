export interface PurchaseCreationAttrs {
    item: number,
    amount: number,
}
export class Purchase{
    item: number;
    amount: number;
    constructor(data : PurchaseCreationAttrs) {
    this.item = data.item;
    this.amount = data.amount;
    }

    checkUndefined(){
        if(isNaN(this.item) || isNaN(this.amount)) return true;
        return false
    }
}