const { timer, of, interval, from, throwError } = require('rxjs');
const { ignoreElements, take } = require('rxjs/operators');

// ignoreElements 只有在 observable complete or error 的時候才會發出

// 不會輸出
const source = interval(100);
const example = source.pipe(ignoreElements());
// example.subscribe(console.log);


// 顯示 complete
const source2 = interval(100).pipe(take(5));
const example2 = source2.pipe(ignoreElements());
// example2.subscribe({
//     next: _ => console.log('next'),
//     error: _ => console.log('error'),
//     complete: _ => console.log('complete'),
// });


// 顯示 error
const source3 = throwError("eeeeeeeeeeeeeeeeeee");
const example3 = source3.pipe(
    ignoreElements()
);
example3.subscribe({
    next: _ => console.log('next'),
    error: _ => console.log('error'),
    complete: _ => console.log('complete'),
});