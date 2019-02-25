const { Subject, interval, ReplaySubject } = require('rxjs');
const { take, tap, multicast, mapTo } = require('rxjs/operators');

const source = interval(1000).pipe(take(5));

const example = source.pipe(
    tap(_ => console.log(`Tap: ${_}`)),
    mapTo('Result!')
);


// multicast  是將來源 observable 改成群播的效果
// 如果這個 source 被訂閱多次，source observable 本身運行一次，會 cast 到所有訂閱
// 若沒有用 multicast ，source 被訂閱幾次，就會重複運行幾次
const multi = example.pipe(multicast(() => new Subject()));

const subscribe1 = multi.subscribe(_ => console.log(`Subscribe 1: ${_}`));
const subscribe2 = multi.subscribe(_ => console.log(`Subscribe 2: ${_}`));

// multi.connect();


const source2 = interval(1000).pipe(take(5));

const example2 = source2.pipe(
    tap(_ => console.log(`Tap 2: ${_}`)),
    mapTo('Result 2')
);

const multi2 = example2.pipe(multicast(() => new ReplaySubject(5)));

multi2.connect()

// not working
setTimeout(() => {
    multi2.subscribe(_ => console.log(_))
}, 6000);

