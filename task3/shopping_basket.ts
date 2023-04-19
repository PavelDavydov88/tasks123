import {Item, ItemCreationAttrs} from "./item";
import {Purchase, PurchaseCreationAttrs} from "./purchase";
import {Discount, DiscountCreationAttrs} from "./discount";
import {TotalDiscount, TotalDiscountCreationAttrs} from "./total_discount";
import {ItemDiscount, ItemDiscountCreationAttrs} from "./item_discount";

export class Shopping_basket {
    constructor(dto) {
        this.dto = dto;
    }

    dto: object;

    fillBasket() {

        for (let i = 0; i < this.dto['items'].length; i++) {
            const item = new Item(this.dto['items'][i]);
            if (!item.checkUndefined()) {
                this.items.push(
                    {...item}
                )
            }
        }

        for (let i = 0; i < this.dto['discounts'].length; i++) {
            const discount = new Discount(this.dto['discounts'][i]);
            if (!discount.checkUndefined()) {
                this.discounts.push(
                    {...discount}
                )
            }
        }

        for (let i = 0; i < this.dto['totalDiscounts'].length; i++) {
            const totalDiscount = new TotalDiscount(this.dto['totalDiscounts'][i]);
            if (!totalDiscount.checkUndefined()) {
                this.totalDiscounts.push(
                    {...totalDiscount}
                )
            }
        }

        for (let i = 0; i < this.dto['purchases'].length; i++) {
            const purchase = new Purchase(this.dto['purchases'][i]);
            if (!purchase.checkUndefined()) {
                this.purchases.push(
                    {...purchase}
                )
            }
        }

        for (let i = 0; i < this.dto['itemsDiscounts'].length; i++) {
            const itemsDiscount = new ItemDiscount(this.dto['itemsDiscounts'][i]);
            if (!itemsDiscount.checkUndefined()) {
                this.itemsDiscounts.push(
                    {...itemsDiscount}
                )
            }
        }

        let totalReceipt =[];
        for (let i = 0; i< this.items.length; i++){
            let priceItem: number = this.items[i].price;
            let countItem: number = 0;
            let totalDiscountItem: number = 1 - +this.items[i].discount.slice(0, this.items[i].discount.length-1)/100;
            for (let j = 0; j < this.purchases.length; j++) {
                if (this.purchases[j].item == this.items[i].id) {
                    countItem += this.purchases[j].amount
                }
            }
            for (let k = 0; k < this.itemsDiscounts.length; k++) {
                if (this.itemsDiscounts[k].itemId == this.items[i].id) {
                    for (let n = 0; n < this.discounts.length; n++) {
                        if (this.discounts[n].id == this.itemsDiscounts[k].discountId) {
                            totalDiscountItem =(1- +this.discounts[n].discount.slice(0, this.discounts[n].discount.length-1)/100) * totalDiscountItem;
                        }
                    }
                }
            }
            totalReceipt.push({'name': this.items[i].name, 'countItem': countItem, 'totalWorth': Math.floor(countItem*priceItem*totalDiscountItem), 'startWorth':(countItem*priceItem)})
        }

        let totalDiscount = 0;
        let totalStartSum = 0;
        let totalSum = 0;
        for (let a = 0; a < totalReceipt.length; a++) {
            console.log(`${totalReceipt[a].name} - ${totalReceipt[a].countItem} штук, ${totalReceipt[a].totalWorth} рублей (${totalReceipt[a].startWorth} рублей без скидки)`);
            totalSum += totalReceipt[a].totalWorth;
            totalStartSum += totalReceipt[a].startWorth;
        }
        console.log(`Итого: ${totalSum} рублей (${totalStartSum} рублей без скидки)`);
        for (let y = 0; y < this.totalDiscounts.length; y++) {
            if (totalSum >= this.totalDiscounts[y].minPrice && (+this.totalDiscounts[y].discount.slice(0, this.totalDiscounts[y].discount.length - 1)) > totalDiscount) {
                totalDiscount = +this.totalDiscounts[y].discount.slice(0, this.totalDiscounts[y].discount.length - 1);
            }
        }
        if (totalDiscount ==0 ){
            totalDiscount = 1;
        } else {
            totalDiscount = (100-totalDiscount)*0.01;
        }
        console.log(`Итого со скидкой: ${Math.floor(totalSum * totalDiscount)} рублей (${Math.floor(totalSum * totalDiscount*100%100)} копеек)`);
    }

    items: ItemCreationAttrs[] = new Array();
    discounts: DiscountCreationAttrs[] = new Array();
    totalDiscounts: TotalDiscountCreationAttrs[] = new Array();
    purchases: PurchaseCreationAttrs[] = new Array();
    itemsDiscounts: ItemDiscountCreationAttrs[] = new Array();

}