"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Shop {
    constructor() {
        this.items = [];
    }
    getItems() {
        return this.items;
    }
    addItem(item) {
        this.items.push(item);
    }
}
exports.default = Shop;
