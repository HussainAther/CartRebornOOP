import Item from './Item';

class Shop {
  private items: Item[];

  constructor() {
    this.items = [];
  }

  public getItems(): Item[] {
    return this.items;
  }

  public addItem(item: Item): void {
    this.items.push(item);
  }
}

export default Shop;

