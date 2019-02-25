const { timer, of, interval } = require('rxjs');
const { distinctUntilChanged } = require('rxjs/operators');

const source = of(1, 2, 3, 4, 5, 5, 4, 4, 1, 1);

const example = source.pipe(
    distinctUntilChanged()
);
example.subscribe(console.log);


const refObject = { name: 'skye' };
const source2 = of(refObject, refObject, { name: 'kau' }, { name: 'kau' });

const example2 = source2.pipe(
    distinctUntilChanged()
);
example2.subscribe(console.log);
