const { of, interval, race, throwError } = require('rxjs');
const { map, mapTo, delay, catchError } = require('rxjs/operators');

// race 會訂閱最新發出的 observable，將其他捨棄
const example1 = race(
    interval(1001),
    interval(1000).pipe(mapTo('winner')),
    interval(2500),
    interval(3500),
);
// example1.subscribe(_ => console.log(_));


// 如果 race 中的 observable 發出錯誤
const first = of('first').pipe(
    delay(1000),
    map(_ => {
        throw 'Error';
    })
);
const two = of('two').pipe(delay(2000));
const third = of('third').pipe(delay(3000));

const example2 = race(first, two, third).pipe(
    catchError(_ => {
        return of(_);
    })
);
example2.subscribe(_ => console.log(_));