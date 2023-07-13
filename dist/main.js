"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shop_1 = require("./Shop");
const User_1 = require("./User");
const Item_1 = require("./Item");
// Create a Shop
const shop = new Shop_1.default();
// Create Items and add them to the shop
const item1 = new Item_1.default('Item 1', 10, 'Description 1');
const item2 = new Item_1.default('Item 2', 20, 'Description 2');
const item3 = new Item_1.default('Item 3', 30, 'Description 3');
shop.addItem(item1);
shop.addItem(item2);
shop.addItem(item3);
// Create a User
const user = new User_1.default('John', 25);
// Add items to the user's cart
user.addToCart(item1);
user.addToCart(item2);
user.addToCart(item2); // Add another item2
// Print the user's cart
user.printCart();
// Remove item2 from the cart
user.removeFromCart(item2);
// Remove 1 quantity of item1 from the cart
user.removeQuantityFromCart(item1, 1);
// Print the user's cart and total
user.printCart();
console.log('Total:', user.cartTotal());
