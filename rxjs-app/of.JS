// Import the 'of' function from the 'rxjs' library, 
const { of } = require('rxjs');

// Create an observable that emits the values 1, 2, 3, 4, and 5 in sequence, then completes
const observable = of(1, 2, 3, 4, 5);

// Subscribe to the observable to listen for emitted values and completion
observable.subscribe({
  // The 'next' function is called each time a value is emitted by the observable
  next: (value) => console.log(value), // Logs each emitted value to the console

  // The 'complete' function is called once the observable has finished emitting all values
  complete: () => console.log('Completed'), // Logs 'Completed' when the observable finishes
});
