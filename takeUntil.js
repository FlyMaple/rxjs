const { zip, timer, of, interval, from } = require('rxjs');
const { take, takeUntil } = require('rxjs/operators');


// takeUntil 裡面發出值，就停止源 observable
const source = interval(200);
source.pipe(
    takeUntil(timer(5000))
).subscribe(console.log);