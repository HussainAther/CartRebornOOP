import { connectToDatabase } from './database';
import Shop from './Shop';
import User from './User';
import Item from './Item';

async function main() {
  await connectToDatabase();

  // Create a Shop
  const shop = new Shop();

  // Create Items and add them to the shop
  const item1 = new Item('Item 1', 10, 'Description 1');
  const item2 = new Item('Item 2', 20, 'Description 2');
  const item3 = new Item('Item 3', 30, 'Description 3');

  await item1.save();
  await item2.save();
  await item3.save();

  // Create a User
  const user = new User('John', 25);

  // Add items to the user's cart
  user.addToCart(item1.getId());
  user.addToCart(item2.getId());
  user.addToCart(item2.getId()); // Add another item2

  // Print the user's cart
  await user.printCart();

  // Remove item2 from the cart
  user.removeFromCart(item2.getId());

  // Remove 1 quantity of item1 from the cart
  user.removeQuantityFromCart(item1.getId(), 1);

  // Print the user's cart and total
  await user.printCart();
  console.log('Total:', await user.cartTotal());
}

main().catch((error) => console.error(error));

