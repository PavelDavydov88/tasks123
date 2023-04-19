import {Shopping_basket} from "./shopping_basket";

let items = {
    "items": [{"id": 1, "name": "мяч", "price": 999, "discount": "10%"}, {"id": 2, "name": "футболка", "price": 2000, "discount":"25%"}],
    "discounts": [{"id": 1, "name": "весенняя распродажа", "discount": "20%"}, {"id": 2, "name": "новогодние скидки", "discount": "20%"}],
    "totalDiscounts": [{"id": 1, "minPrice": 1000, "discount": "5%"}, {"id": 1, "minPrice": 5000, "discount": "6%"}],
    "purchases": [{"item": 1, "amount": 6}, {"item": 2, "amount": 5}],
    "itemsDiscounts": [{"itemId": 1, "discountId": 1}, {"itemId": 2, "discountId": 1}, {"itemId": 2, "discountId": 2}]
}

function app() {
    const basket = new Shopping_basket(items);
    basket.fillBasket();
}

app();