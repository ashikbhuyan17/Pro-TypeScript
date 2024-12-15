const { Observable } = require('rxjs');

// const myObservable = new Observable((subscriber) => {
//   setInterval(() => {
//     subscriber.next('hi');
//   }, 1000);
// });

// // Subscription to the Observable
// const subscription = myObservable.subscribe((value) => {
//   console.log(value);
// });

// // To stop the subscription after 5 seconds
// setTimeout(() => {
//   subscription.unsubscribe();
// }, 5000);

// // Observable তৈরি করা
const observable = new Observable((subscriber) => {
  subscriber.next('video 1 uploades');
  subscriber.next('video 2 uploades');
  // subscriber.error('error: internent pblm'); // ত্রুটি ইমিট করা
  subscriber.complete(); // স্ট্রিম শেষ করা
});

// Observer তৈরি করা
const observer = {
  next: (value) => console.log(`notification: ${value}`),
  error: (err) => console.error(`error: ${err}`),
  complete: () => console.log('there is no more notification'),
};

// Observer-কে Observable-এ subscribe করানো
observable.subscribe(observer);
