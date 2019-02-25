const { timer, of, interval, from } = require('rxjs');
const { bufferTime } = require('rxjs/operators');

// bufferTime 和 buffer 差不多，但是可以直接寫入時間
// 第2個參數和 bufferCount 差不多
const source = interval(1000);
const example = source.pipe(
    bufferTime(3000, 1000)
);
example.subscribe(console.log);