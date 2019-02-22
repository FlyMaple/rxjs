const { withLatestFrom, map } = require('rxjs/operators');
const { interval } = require('rxjs');

const source = interval(3000);
const secondSource = interval(1000);

// source 發出值的時候，secondSource 還未發生值，所以不會發出值
// secondSource 發出值的時候，就會連同現在的 source 值一起發出
// 等到 source 下一次發出值時，因 secondSource 已經有值，所以一並發出
const example = source.pipe(
    withLatestFrom(secondSource)
);
example.subscribe(_ => console.log(_));



const example2 = secondSource.pipe(
    withLatestFrom(source)
);
// example2.subscribe(_ => console.log(_));