const { timer, of, interval, from, merge, throwError, Subject } = require('rxjs');
const { switchMap, map } = require('rxjs/operators');

const source = timer(0, 5000);
const example = source.pipe(
    switchMap((i, index) => interval(500).pipe(
        map(__ => `${index} => ${__}`)
    ), (outerValue, innerValue, outerIndex, innerIndex) => ({ outerValue, innerValue, outerIndex, innerIndex }))
);
example.subscribe(console.log);