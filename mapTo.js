const { timer, of, interval, from, merge } = require('rxjs');
const { map, mapTo, take } = require('rxjs/operators');

const source = interval(1000);
const example = source.pipe(
    mapTo("Yo"),
    take(4)
);
example.subscribe(console.log);