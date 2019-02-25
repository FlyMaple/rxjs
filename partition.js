const { timer, of, interval, from, merge, throwError } = require('rxjs');
const { map, mapTo, take, mergeMap, partition, catchError } = require('rxjs/operators');

const source = from([1, 2, 3, 4, 5, 6]);
const [even, odd] = source.pipe(
    partition(_ => _ % 2 === 0)
);

const merged = merge(
    even.pipe(map(_ => `Even: ${_}`)),
    odd.pipe(map(_ => `Odd: ${_}`)),
);
merged.subscribe(console.log)




const source2 = from([1, 2, 3, 4, 5, 6]);
const example = source2.pipe(
    map(_ => {
        if (_ < 4) {
            return { success: _ };
        }

        throw `${_} is error`;
    }),
    catchError(_ => of({ errors: _ }))
);
const [success, errors] = example.pipe(
    partition(_ => _.success)
);
const merged2 = merge(
    success,
    errors
);
merged2.subscribe(console.log);