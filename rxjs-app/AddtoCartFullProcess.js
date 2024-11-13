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

// Step 5: Function to update an item's name by its current name
function updateItemName(oldName, newName) {
  // Find the item by its current name and update its name
  const item = cartItems.find((item) => item.name === oldName);

  if (item) {
    item.name = newName; // Update the item name

    // Emit the updated item (name has changed)
    console.log(`Updated item: ${oldName} -> ${newName}`);
    cartSubject.next({ action: 'Updated', itemName: newName });
  } else {
    console.log(`Item ${oldName} not found in the cart.`);
  }
}

// Step 6: Function to remove an item from the cart by name
function removeFromCart(itemName) {
  // Filter the cartItems array to remove the item with the matching name
  const index = cartItems.findIndex((item) => item.name === itemName);

  if (index !== -1) {
    cartItems.splice(index, 1); // Remove the item from the array

    // Emit the updated cart (after removal)
    console.log(`Removed ${itemName} from the cart.`);
    cartSubject.next({ action: 'Removed', itemName });
  } else {
    console.log(`Item ${itemName} not found in the cart.`);
  }
}

// Step 7: Function to get the current cart items
function getCartItems() {
  return cartItems;
}

// Step 8: Subscribe to the cartObservable to listen for cart updates
cartObservable.subscribe({
  next: (item) => {
    if (item.action === 'Updated') {
      console.log(`Cart update: Item name changed to ${item.itemName}`);
    } else if (item.action === 'Removed') {
      console.log(`Cart update: ${item.itemName} was removed.`);
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

// Simulate updating the name of an item
setTimeout(() => {
  updateItemName('Smartphone', 'Smartphone Pro'); // Update Smartphone to Smartphone Pro
}, 4000);

// Simulate removing an item (Smartphone Pro)
setTimeout(() => {
  removeFromCart('Smartphone Pro'); // Remove the "Smartphone Pro" from the cart
}, 5000);

// Simulate user clicking the checkout button after adding/updating/removing items
setTimeout(() => {
  console.log('Proceeding to checkout...');
  console.log('Current Cart Items:', getCartItems()); // Get the current cart items and display them
  cartSubject.complete(); // Complete the cart observable after checkout
}, 6000);
