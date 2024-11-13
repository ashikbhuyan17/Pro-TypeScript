// Import required RxJS functions
const { of } = require('rxjs');
const { map } = require('rxjs/operators');

// Create an observable that emits values
const observable = of(1, 2, 3, 4, 5);

// Use RxJS operators to transform the data
const subscription = observable
  .pipe(
    map((value) => value * 2) // Double each value
  )
  .subscribe({
    next: (value) => console.log(`Value: ${value}`),
    complete: () => console.log('Complete!'),
  });

// Unsubscribe (optional in this simple example)
setTimeout(() => {
  subscription.unsubscribe();
  console.log('Unsubscribed!');
}, 10000);
