export interface DiscountCreationAttrs {
    id: number,
    name: string,
    discount: string,
}
export class Discount{
    id: number;
    name: string;
    discount: string;
    constructor(data : DiscountCreationAttrs) {
    this.id = data.id;
    this.name = data.name;
    this.discount = data.discount;
    }

    checkUndefined(){
        if(isNaN(this.id) || !this.name  || !this.discount) return true;
        return false
    }
}