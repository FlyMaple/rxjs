const { timer, of, interval, from } = require('rxjs');
const { bufferWhen } = require('rxjs/operators');


// bufferWhen 和其他 buffer 差不多，尤其是 bufferToggle
// bufferToggle 是要設定 start and close
// bufferWhen 只要設定 close
const source = interval(1000);
const source2 = () => interval(5000);

const example = source.pipe(
    bufferWhen(source2)
);
example.subscribe(console.log);