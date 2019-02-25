const { interval } = require('rxjs');
const { publish, tap } = require('rxjs/operators');

console.log("===start");

const source = interval(1000);

const example = source.pipe(
    tap(_ => console.log(`Tap: ${_}`)),
    publish()
);
example.subscribe(_ => console.log(`Subscribe 1: ${_}`));
example.subscribe(_ => console.log(`Subscribe 2: ${_}`));


// 在呼叫 connect 前，subscribe 都不會執行
setTimeout(() => example.connect(), 3000);

