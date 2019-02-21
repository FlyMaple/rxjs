const { of, concat } = require("rxjs");
const { delay } = require("rxjs/operators");

console.log('==start');

// 延遲3秒後發出 1, 2, 3
const source1 = of(1, 2, 3).pipe(
    delay(3000)
);

// 發出 4, 5, 6
const source2 = of(4, 5, 6);

// 兩個 observable 合併，有先後順序，一個 observable complete 才換下一個
const example = concat(source1, source2);

example.subscribe(_ => console.log(_));