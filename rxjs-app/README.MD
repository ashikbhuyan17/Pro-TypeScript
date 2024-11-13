### of vs new observable ()

In RxJS, of and new Observable() are two ways to create observables,
1. of — Simplified Observable Creation for Static Values
   
```javascript
    const { of } = require('rxjs');

    const observable = of(1, 2, 3, 4, 5);

    observable.subscribe({
    next: (value) => console.log(value),
    complete: () => console.log('Completed')
    });
```

2. new Observable() — Flexible, Customizable Observable Creation
   Using new Observable() gives you full control over the observable’s behavior, allowing you to define exactly how and when values are emitted. This is useful for creating complex observables, such as those that emit values over time, respond to user actions, handle errors, or don’t complete right away.
```javascript
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
    complete: () => console.log('Completed')
    });

```