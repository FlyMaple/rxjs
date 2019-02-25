const { interval, of, throwError, timer } = require('rxjs');
const { mergeMap, retry, map, tap, retryWhen, delayWhen } = require('rxjs/operators');

const source = interval(1000);

const example = source.pipe(
    map(val => {
        if (val > 5) {
            throw val;
        }

        return val;
    }),
    retryWhen(errors => {
        return errors.pipe(
            tap(val => console.log(`Tap: ${val}`)),
            // 等待6秒後重新retry
            delayWhen(val => timer(val * 1000))
        );
    })
);

example.subscribe(_ => console.log(_));


// TODO
// https://stackblitz.com/edit/angular-cwnknr?file=app%2Frxjs-utils.ts