const { timer, of, interval, from, merge, throwError } = require('rxjs');
const { pluck } = require('rxjs/operators');




// pluck 針對 object 裡面的屬性拉出
const source = from([{ name: 'Joe', age: 30 }, { name: 'Sarah', age: 35 }]);
const example = source.pipe(
    pluck('name')
);
// example.subscribe(console.log);




const source2 = from([
    { name: 'Joe', age: 30, job: { title: 'Developer', language: 'JavaScript' } },
    // 当找不到 job 属性的时候会返回 undefined
    { name: 'Sarah', age: 35 }
]);
const example2 = source2.pipe(
    pluck('job', 'title')
);
example2.subscribe(console.log);