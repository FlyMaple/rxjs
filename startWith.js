const { interval, of } = require('rxjs');
const { startWith, delay, take, scan } = require('rxjs/operators');

// 發出前先用 startWith 插入一值
const example1 = of(1, 2, 3).pipe(
    startWith('~~~'),
);
// example1.subscribe(_ => console.log(_));


// 發出前先用 startWith 插入一值
const example2 = interval(1000).pipe(
    startWith('~~~~~~~~~~~~~'),
    take(5)
);
// example2.subscribe(_ => console.log(_));


// scan 和 Array.reduce 用法一樣，這邊使用 startWith 給初始值
const example3 = of('World!', 'Goodbye!', 'World!').pipe(
    startWith('Hello'),
    scan((acc, value) => {
        return `${acc} ${value}`;
    })
);
// example3.subscribe(_ => console.log(_));


// startWith 使用多個初始值
const example4 = interval(1000).pipe(
    startWith(-3, -2, -1)
);
example4.subscribe(_ => console.log(_));