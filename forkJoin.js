const { of, interval, forkJoin, throwError } = require('rxjs');
const { delay, take, mergeMap, catchError } = require('rxjs/operators');

console.log('==start');

const myPromise = val => new Promise(resolve => setTimeout(() => resolve(`Promise Resolved: ${val}`), 5000));


// forkJoin 類似 Promose.all，
// 但是會等裡面每個 observable complete 的時候在抓取每個 observable 最新的值
const example = forkJoin(
    of(1, 2, 3),
    of('delay observable').pipe(delay(1000)),
    interval(1000).pipe(take(1)),
    interval(1000).pipe(take(3)),
    myPromise(99999)
);

// example.subscribe(_ => console.log(_));


// 一次發出一個陣列值，將陣列值灌入 forkJoin 達成 Promise.all 的效果
const source = of([1, 2, 3, 4, 5]).pipe(
    mergeMap(_ => {
        // console.log(..._.map(myPromise));
        return forkJoin(..._.map(myPromise))
    })
);

// source.subscribe(_ => console.log(_));


// 將 forkJoin 內部的 observable 錯誤拋到外面處裡
const example2 = forkJoin(
    of(1, 2, 3),
    of('delay observable').pipe(delay(1000)),
    interval(1000).pipe(take(1)),
    interval(1000).pipe(take(3)),
    throwError('Error'),
    myPromise(99999)
).pipe(
    catchError(err => {
        return of(err);
    })
);

// example2.subscribe(_ => console.log(_));


// forkJoin 內部的 observable 發生錯誤自行處理掉
const example3 = forkJoin(
    of(1, 2, 3),
    of('delay observable').pipe(delay(1000)),
    interval(1000).pipe(take(1)),
    interval(1000).pipe(take(3)),
    throwError('Error').pipe(catchError(err => of('This error handled'))),
    myPromise(99999)
);

example3.subscribe(_ => console.log(_));