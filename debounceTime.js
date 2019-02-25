const { timer, of, interval } = require('rxjs');
const { debounceTime, take } = require('rxjs/operators');

const source = interval(1000).pipe(take(5));

source.pipe(
    // debounceTime(1100)
    debounceTime(900)
).subscribe(console.log)