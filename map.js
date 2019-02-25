const { timer, of, interval, from, merge } = require('rxjs');
const { map, mapTo, take } = require('rxjs/operators');

const source = interval(1000);
const example = source.pipe(
    map(_ => `Interval: ${_}`),
    take(10)
);
example.subscribe(console.log);