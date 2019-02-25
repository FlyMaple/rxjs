const { timer, of, interval, from } = require('rxjs');
const { bufferCount } = require('rxjs/operators');

// bufferCount 2，keep 兩次就會發出
const source = interval(1000);
const example = source.pipe(
    bufferCount(2)
);
example.subscribe(console.log);