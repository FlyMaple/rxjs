const { timer, of, interval, from } = require('rxjs');
const { first, last } = require('rxjs/operators');

const source = of(1, 2, 3, 4, 5);

const example = source.pipe(last());
example.subscribe(console.log);


const source2 = from([1, 2, 3, 4, 5]);

const example2 = source2.pipe(last());
example2.subscribe(console.log);


const source3 = of(1, 2, 3, 4, 5);

const example3 = source3.pipe(last(_ => _ < 2));
example3.subscribe(console.log);


const source4 = of(1, 2, 3, 4, 5);
const example4 = source4.pipe(last(_ => _ > 20, 'Not match'));
example4.subscribe(console.log);