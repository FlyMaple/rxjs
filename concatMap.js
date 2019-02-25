const { timer, of, interval, from } = require('rxjs');
const { map, concat, concatAll, concatMap, mergeMap, delay } = require('rxjs/operators');

// concat、concatAll、concatMap 要好好探討....
// concat 一個 observable 接一個 observable ... etc
// concatAll 將多個 observable、promise 撈出發出
// concatMap 將來源 observable 內部的 observable 接續處裡



// concatMap 會依順序訂閱內部 observable
// 2000 delay 完之後才會訂閱下一個 1000
const source = of(2000, 1000);
const example = source.pipe(
    concatMap(_ => of(`Delay: ${_}`).pipe(delay(_)))
);
// example.subscribe(console.log);



// mergeMap 會同時訂閱內部所有 observable
// 所以 delay 1000 會先被訂閱發出
// 隔一秒以後 delay 2000 會被訂閱發出
const source2 = of(2000, 1000);
const example2 = source2.pipe(
    mergeMap(_ => of(`Delay: ${_}`).pipe(delay(_)))
);
// example2.subscribe(console.log);


// 範例1
const myPromise = val => new Promise(resolve => resolve(`${val} World!`));
const source3 = of('Hello', 'Goodbye');
const example3 = source3.pipe(
    concatMap(_ => myPromise(_), _ => `\\w ${_}`)
);
// example3.subscribe(console.log);


// 範例2
const source4 = of('Hello', 'Goodbye');
const example4 = source4.pipe(
    map(_ => myPromise(_)),
    concatAll()
);
example4.subscribe(console.log);