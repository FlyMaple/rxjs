const { zip, timer, of, interval, from } = require('rxjs');
const { take, takeUntil, takeWhile } = require('rxjs/operators');


// takeWhile 條件true就都拿，第一個false以後就停止
const source = interval(200);
const example = source.pipe(
    takeWhile(_ => _ < 10)
);
example.subscribe(console.log);