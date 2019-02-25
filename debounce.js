const { timer, of, interval } = require('rxjs');
const { debounce } = require('rxjs/operators');

console.log("==start");

const example = of('WAIT', 'ONE', 'SECOND', 'Last will display');

const debounceExample = example.pipe(debounce(() => timer(100000000000000000000)));

// debounceExample.subscribe(console.log);

const interval$ = interval(1000);

// 0  1   2   3   4   5
// 0 200 400 600 800 1000
const intervalExample = interval$.pipe(debounce((val) => timer(val * 200)));
intervalExample.subscribe(console.log);


// debounce(() => timer(1000)) 似乎是目前這個值，等待1000ms還沒有新值，才會發出的機制，若這個值接下來 observable complete 也會發出