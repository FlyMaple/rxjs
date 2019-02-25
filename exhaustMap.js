const { timer, of, interval, from, merge } = require('rxjs');
const { exhaustMap, take, delay, concatMap, mergeMap, switchMap } = require('rxjs/operators');




// merge 並行內部的 observable
const source = interval(1000);
const example = source.pipe(
    delay(10),
    take(4)
);
const merged = merge(
    example,
    of(true)
).pipe(
    exhaustMap(_ => interval(1000).pipe(take(5)))
);
merged.subscribe(console.log);

// exhaustMap
// 兩個並行的內部 observable，true 會先被轉成 interval
// 這個 interval 5秒後完成，會輪到example
// 但是 example 已經完成，因為take(4)
// 所以merged就結束

// concatMap
// 兩個並行的內部 observable，true 會先被轉成 interval
// 這個 interval 5秒後完成，會輪到example

// mergeMap
// 兩個並行的內部 observable，幾乎是同是併發，並轉成 interval
// example 會有四個值，都會被轉成 interval
// true 會被轉成 interval
// 所以會有5個interval 同時併發

// switchMap
// true 會先被轉成 interval
// 10ms 以後會被 example 所替換掉