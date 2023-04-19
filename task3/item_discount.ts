export interface ItemDiscountCreationAttrs {
    itemId: number,
    discountId: number,
}
export class ItemDiscount{
    itemId: number;
    discountId: number;
    constructor(data : ItemDiscountCreationAttrs) {
    this.itemId = data.itemId;
    this.discountId = data.discountId;
    }

    checkUndefined(){
        if(isNaN(this.itemId) || isNaN(this.discountId)) return true;
        return false
    }
}