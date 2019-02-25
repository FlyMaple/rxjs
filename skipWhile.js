const { zip, timer, of, interval, from } = require('rxjs');
const { skipWhile, skip, take, filter, skipUntil } = require('rxjs/operators');


// skip 是跳過次數
// skipUntil 是自己 observable 發出值才不跳過
// skipWhile 是條件等於 true 都跳過，但是如果有一個 true，就不再跳過
const source = interval(200);
const example = source.pipe(
    skipWhile(_ => {
        console.log(`s: ${_}`);
        return _ < 5;
    })
);
example.subscribe(console.log);