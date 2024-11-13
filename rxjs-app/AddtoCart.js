const { Observable, Subject } = require('rxjs');

// Step 1: Create an observable to simulate adding items to the cart
const cartSubject = new Subject(); // A subject that will emit cart updates

// Step 2: Create an observable to handle the cart updates and listen for "Add to Cart"
const cartObservable = cartSubject.asObservable();

// Step 3: Array to hold the cart items
let cartItems = [];

// Step 4: Function to simulate adding an item to the cart
function addToCart(item) {
  // Add the item to the cartItems array
  cartItems.push(item);

  // Emit the updated cart item
  cartSubject.next(item);
}

// Step 5: Function to remove an item from the cart by name
function removeFromCart(itemName) {
  // Filter the cartItems array to remove the item with the matching name
  cartItems = cartItems.filter((item) => item.name !== itemName);

  // Emit the updated cart (after removal)
  console.log(`Removed ${itemName} from the cart.`);
  cartSubject.next({ action: 'Removed', itemName });
}

// Step 6: Function to get the current cart items
function getCartItems() {
  return cartItems;
}

// Step 7: Subscribe to the cartObservable to listen for cart updates
cartObservable.subscribe({
  next: (item) => {
    if (item.action === 'Removed') {
      console.log(`Cart update: ${item.action} ${item.itemName}`);
    } else {
      console.log(`Added ${item.name} to cart. Quantity: ${item.quantity}`);
    }
  },
  complete: () => console.log('Cart updates completed.'),
});

// Simulate the user clicking "Add to Cart" for different products
setTimeout(() => {
  addToCart({ name: 'Laptop', quantity: 1 }); // User clicks to add Laptop
}, 1000);

setTimeout(() => {
  addToCart({ name: 'Smartphone', quantity: 1 }); // User clicks to add Smartphone
}, 2000);

setTimeout(() => {
  addToCart({ name: 'Headphones', quantity: 2 }); // User clicks to add 2 Headphones
}, 3000);

// Simulate removing an item (Smartphone)
setTimeout(() => {
  removeFromCart('Smartphone'); // Remove the "Smartphone" from the cart
}, 4000);

// Simulate user clicking the checkout button after adding/removing items
setTimeout(() => {
  console.log('Proceeding to checkout...');
  console.log('Current Cart Items:', getCartItems()); // Get the current cart items and display them
  cartSubject.complete(); // Complete the cart observable after checkout
}, 5000);
