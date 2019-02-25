const { zip, timer, of, interval, from } = require('rxjs');
const { sample } = require('rxjs/operators');

const source = interval(1000);
const example = source.pipe(sample(interval(2000)));
// example.subscribe(console.log);

const source2 = zip(
    from(['AAA', 'BBB', 'CCC', 'DDD', 'EEE', 'FFF']),
    interval(1000)
);
const example2 = source2.pipe(
    sample(interval(2000))
).subscribe(console.log);