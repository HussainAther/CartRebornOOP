import { v4 as uuidv4 } from 'uuid';

class Item {
  private id: string;
  private name: string;
  private price: number;
  private description: string;

  constructor(name: string, price: number, description: string) {
    this.id = uuidv4();
    this.name = name;
    this.price = price;
    this.description = description;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }

  public getDescription(): string {
    return this.description;
  }
}

export default Item;

