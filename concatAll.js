const { of, interval } = require('rxjs');
const { take, concatAll, map } = require('rxjs/operators');

const simplePromise = val => new Promise(resolve => resolve(val));

// concatAll 不是很明確，看起來是將 observable 的基本型別&基本物件撈出來並發出
// 沒有撈出的話就會訂閱到 observable 物件
const source = interval(2000).pipe(
    map(value => of(value + 10)),
    concatAll()
);


// concatAll 不是很明確，看起來是將 promise 的基本型別&基本物件撈出來並發出
// 沒有撈出的話就會訂閱到 promise 物件
const source2 = interval(2000).pipe(
    map(value => simplePromise(value)),
    concatAll()
);


const obs1 = interval(1000).pipe(take(5));
const obs2 = interval(500).pipe(take(2));
const obs3 = interval(2000).pipe(take(1));

// source3 中包了三個 observable
// concallAll 撈出來發出，並且套用 concat 的行為繼續下一個 observable，
// 然後對下一個 observable 撈出來發出，loop...
const source3 = of(obs1, obs2, obs3).pipe(
    concatAll()
);

source3.subscribe(_ => console.log(_));


// 如果要接續訂閱，要用 concat
// 如果接續訂閱的內容是 observable or promise，要用 concatAll 撈出並發出