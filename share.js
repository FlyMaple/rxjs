const { timer } = require('rxjs');
const { tap, mapTo, share } = require('rxjs/operators');

const source = timer(1000);

const example = source.pipe(
    tap(_ => console.log(`SIDE EFFECT`)),
    mapTo("RESULT")
);

// 不共享就會運行兩次 source
// example.subscribe((_) => console.log(`Subscribe 1: ${_}`));
// example.subscribe((_) => console.log(`Subscribe 2: ${_}`));

const sharedExample = example.pipe(share());

sharedExample.subscribe(_ => console.log(`Subscribe 1: ${_}`));
sharedExample.subscribe(_ => console.log(`Subscribe 2: ${_}`));