const { timer, of, interval, from, merge, throwError, Subject } = require('rxjs');
const { reduce, scan, map, distinctUntilChanged } = require('rxjs/operators');

const source2 = of(1, 2, 3, 4);
const example2 = source2.pipe(
    scan((acc, value) => acc + value, 0)
);
example2.subscribe(console.log);




const subject = new Subject();
const example = subject.pipe(
    scan((acc, value) => Object.assign({}, acc, value), {})
);
example.subscribe(console.log);

subject.next({
    name: 'Joe'
});
subject.next({
    age: 18
});
subject.next({
    favoriteLanguage: 'zh-TW'
})




const source3 = interval(500);
const example3 = source3.pipe(
    scan((acc, value) => [...acc, value], []),
    map(r => r[Math.floor(Math.random() * r.length)]),
    distinctUntilChanged()
);
example3.subscribe(console.log);