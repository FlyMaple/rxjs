const { zip, timer, of, interval, from, merge } = require('rxjs');
const { map, throttle, throttleTime } = require('rxjs/operators');

const source = interval(1000);
const example = source.pipe(
    throttleTime(2000)
);
// example.subscribe(console.log);



const example2 = merge(
    interval(750),
    interval(1000)
).pipe(throttleTime(1200));
example2.subscribe(console.log);