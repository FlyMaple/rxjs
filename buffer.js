const { timer, of, interval, from } = require('rxjs');
const { buffer } = require('rxjs/operators');


// 來源 observable 發出的值都 keep 下來，直到 buffer 的 observable 發出值，發出一次，就將 keep 的值吐出
const source = interval(1000);
const example = source.pipe(
    buffer(interval(3000))
);
example.subscribe(console.log);