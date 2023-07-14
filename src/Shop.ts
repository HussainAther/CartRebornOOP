import Item from './Item';
import { getCollection } from './database';

class Shop {
  private collection = getCollection('items');

  public async addItem(item: Item): Promise<void> {
    await this.collection.insertOne(item);
  }

  public async getItems(): Promise<Item[]> {
    return this.collection.find().toArray();
  }
}

export default Shop;

