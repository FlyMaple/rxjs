const { zip, timer, of, interval, from } = require('rxjs');
const { skip, take, filter, skipUntil } = require('rxjs/operators');


// skipUntil 和 skip 不同
// skip 是單純跳過次數
// skipUntil 是等待自己的 observable 發出值才不跳過
const source = interval(1000);
const example = source.pipe(
    skipUntil(timer(6000))
);
example.subscribe(console.log);