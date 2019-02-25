const { zip, timer, of, interval, from } = require('rxjs');
const { skip, take, filter } = require('rxjs/operators');

const source = interval(200);
const example = source.pipe(
    take(10),
    skip(6),
);
// example.subscribe(console.log);


const source2 = interval(200);
const example2 = source2.pipe(
    take(10),
    filter(_ => _ > 5)
);
example2.subscribe(console.log);