import Shop from './Shop';
import User from './User';
import Item from './Item';

// Create a Shop
const shop = new Shop();

// Create Items and add them to the shop
const item1 = new Item('Item 1', 10, 'Description 1');
const item2 = new Item('Item 2', 20, 'Description 2');
const item3 = new Item('Item 3', 30, 'Description 3');

shop.addItem(item1);
shop.addItem(item2);
shop.addItem(item3);

// Create a User
const user = new User('John', 25);

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

