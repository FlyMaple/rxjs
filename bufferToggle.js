const { timer, of, interval, from } = require('rxjs');
const { bufferToggle } = require('rxjs/operators');


// bufferToggle 第1個參數 可以設定隔幾秒開啟緩衝區
// 第2個參數 設定幾秒後輸出緩衝區
const source = interval(1000);
const example = source.pipe(
    bufferToggle(
        interval(5000),
        val => {
            console.log(val);
            return interval(5000)
        }
    )
);
example.subscribe(_ => console.log(`subscribe: ${_}`));