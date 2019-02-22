const { of, interval } = require('rxjs');
const { delay, map, mergeAll, take } = require('rxjs/operators');

const myPromise = val => new Promise(resolve => setTimeout(() => resolve(val), 2000));


// mergeAll 和 concatAll 差不多，一樣都是將 observable and promise 撈出並發出，
// 但是 mergeAll 裡面的 observable 不會有先後順序，先發出的就會先被訂閱
const source = of(1, 2, 3).pipe(
    map(_ => myPromise(_)),
    mergeAll()
);
// source.subscribe(_ => console.log(_));


// 每 0.5 秒發出值，取五個
const source2 = interval(500).pipe(take(5));

// 每個值轉成 interval observable ，這個 observable 延遲1秒後發出值，取3個，
// 如果沒有用 mergeAll，會訂閱到5個 interval observable，
// 套用 mergeAll 就會將這5個 interval observable 撈出並發出給訂閱
// mergeAll 帶數字參數2，代表這5個 interval observable 同時間只能有兩個在執行，
// 其餘三個要等這兩個完成之後，才會在挑兩個出來執行，最後才是第5個
source2.pipe(
    map(_ => {
        return source2.pipe(
            delay(1000),
            take(3)
        );
    }),
    mergeAll(2)
).subscribe(_ => console.log(_));