const { timer, of, interval, from, merge, throwError } = require('rxjs');
const { reduce, scan } = require('rxjs/operators');



// reduce 會等 source observable complete 才發出訂閱
const source = of(1, 2, 3, 4);
const example = source.pipe(
    reduce((acc, value) => acc + value, 0)
);
example.subscribe(console.log);



// scan 每次 loop 完都會發出訂閱
const source2 = of(1, 2, 3, 4);
const example2 = source2.pipe(
    scan((acc, value) => acc + value, 0)
);
example2.subscribe(console.log);