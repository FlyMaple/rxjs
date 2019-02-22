const { of } = require('rxjs');
const { every } = require('rxjs/operators');

const source = of(1, 2, 3, 4, 5);

// every 要全部的值都通過驗證才會回傳 true
source.pipe(
    every(val => val === 1 ? true : false)
).subscribe(_ => console.log(_));