const { timer, of, interval, from } = require('rxjs');
const { tap, concatMapTo, map, concat, concatAll, concatMap, mergeMap, delay, take } = require('rxjs/operators');



// 500ms 發出一個 request，共發出5筆
// 這個 request 要等 5000ms 才會回來
// 5筆 request 因為使用 concatMapTo，所以等第一個 request 回來後才會發出下一個 request
const source = interval(500).pipe(
    tap(_ => console.log(`Run source tap`)),
    take(5)
);
const fakeRequest = of('Request complete').pipe(
    tap(_ => console.log(`Send request`)),
    delay(5000)
);

source.pipe(
    concatMapTo(fakeRequest)
).subscribe(_ => console.log(`S: ${_}`));



// 如果使用 concat，會等第一個 source observable complete 之後才會執行 fakeRequest
// source.pipe(
//     concatMap(fakeRequest)
// ).subscribe(console.log);



// concatMap 可以做到 concatMapTo 的效果
// 和 map mapTo 的差異，一個有轉換，一個直接輸出
// source.pipe(
//     concatMap(_ => {
//         return fakeRequest;
//     }),
// ).subscribe(_ => console.log(`S: ${_}`));