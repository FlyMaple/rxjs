const { timer, of, interval, from, merge } = require('rxjs');
const { take, expand, delay } = require('rxjs/operators');



// 遞迴 / 重複
const source = of(2);
const example = source.pipe(
    expand(val => {
        console.log(`Pass ${val}`);

        return of(val  + 1);
    }),
    take(5),
);
example.subscribe(console.log);