export interface ItemCreationAttrs {
    id: number,
    name: string,
    price: number,
    discount : string
}
export class Item{
    id: number;
    name: string;
    price: number;
    discount : string;
    constructor(data : ItemCreationAttrs) {
        this.id = data.id;
        this.name = data.name;
        this.price = data.price;
        this.discount = data.discount;

    }

    checkUndefined(){
        if(isNaN(this.id) || isNaN(this.price) || !this.name  || !this.discount) return true;
        return false
    }
}