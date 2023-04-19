export interface TotalDiscountCreationAttrs {
    id: number,
    minPrice: number,
    discount: string,
}
export class TotalDiscount{
    id: number;
    minPrice: number;
    discount: string;
    constructor(data : TotalDiscountCreationAttrs) {
    this.id = data.id;
    this.minPrice = data.minPrice;
    this.discount = data.discount;
    }

    checkUndefined(){
        if(isNaN(this.id) || isNaN(this.minPrice)  || !this.discount) return true;
        return false
    }
}