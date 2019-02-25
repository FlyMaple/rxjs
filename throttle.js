const { zip, timer, of, interval, from } = require('rxjs');
const { map, throttle } = require('rxjs/operators');

const source = interval(1000);
const example = source.pipe(
    throttle(val => interval(2000))
);
// example.subscribe(console.log);



const myPromise = val => new Promise(resolve => setTimeout(() => resolve(val), val * 1000));

const source2 = interval(1000);
const example2 = source2.pipe(
    throttle(val => myPromise(val)),
);
example2.subscribe(console.log)