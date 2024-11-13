const { Observable } = require('rxjs');

const observable = new Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);

  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000); // Emit after a delay

  // Note: No need to return anything in simple examples
});

observable.subscribe({
  next: (value) => console.log(value),
  complete: () => console.log('Completed'),
});

// Simulate an observable that emits order status updates over time
const orderStatusObservable = new Observable((subscriber) => {
  // Initial order status update: Order received
  subscriber.next({ orderId: 123, status: 'Order Received' });

  // After a short delay, order moves to 'Processing'
  setTimeout(() => {
    subscriber.next({ orderId: 123, status: 'Processing' });
  }, 1000); // 1-second delay

  // After another delay, order moves to 'Shipped'
  setTimeout(() => {
    subscriber.next({ orderId: 123, status: 'Shipped' });
  }, 3000); // 3-second delay

  // After another delay, order is 'Delivered' and the stream completes
  setTimeout(() => {
    subscriber.next({ orderId: 123, status: 'Delivered' });
    subscriber.complete(); // Mark the stream as complete
  }, 5000); // 5-second delay

  // Note: No need to return anything in simple examples
});

// Subscribe to the observable to listen for order status updates
orderStatusObservable.subscribe({
  // This function is called each time an update is emitted
  next: (update) =>
    console.log(`Order ${update.orderId} Status: ${update.status}`),

  // This function is called when the observable completes
  complete: () => console.log('All updates for this order are completed.'),
});
