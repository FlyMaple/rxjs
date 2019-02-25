const { zip, timer, of, interval, from } = require('rxjs');
const { skipWhile, skip, take, filter, skipUntil } = require('rxjs/operators');

const source = from([1, 2, 3, 4, 5]);
source.pipe(take(1)).subscribe(console.log());