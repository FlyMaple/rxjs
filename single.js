const { zip, timer, of, interval, from } = require('rxjs');
const { single } = require('rxjs/operators');



// single 只能匹配一項，若有多項匹配會丟出錯誤
// first 也可以達到相同的需求
const source = from([1, 2, 3, 4, 5]);
const example = source.pipe(single(_ => _ === 2));
example.subscribe(console.log);