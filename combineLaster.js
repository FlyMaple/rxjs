const { timer, combineLatest } = require('rxjs');

// 在1秒後發出第一個值，接下來每4秒發出值
/*
－０－－－－１－－－－２－－－－３－－－－４
*/
const time1 = timer(1000, 4000);

// 在2秒後發出第一個值，接下來每4秒發出值
/*
－－０－－－－１－－－－２－－－－３－－－－４
*/
const time2 = timer(2000, 4000);

// 在3秒後發出第一個值，接下來每4秒發出值
/*
－－－０－－－－１－－－－２－－－－３－－－－４
*/
const time3 = timer(3000, 4000);

// combineLatest 中的任一個 observable 發出新的值，其他 observable 會一併發出最新值，
// 前提是每個 observable 都要有發出過值
const combined1 = combineLatest(time1, time2, time3);

// combined1.subscribe(_ => console.log(_));


const combined2 = combineLatest(time1, time2, time3, (...args) => {
    return args;
});

// combined1.subscribe(_ => console.log(_));

combined2.subscribe(_ => console.log(_));

// [ 0, 0, 0 ]
// [ 1, 0, 0 ]
// [ 1, 1, 0 ]
// [ 1, 1, 1 ]
// [ 2, 1, 1 ]
// [ 2, 2, 1 ]
// [ 2, 2, 2 ]
// [ 3, 2, 2 ]
// [ 3, 3, 2 ]
// [ 3, 3, 3 ]
// [ 4, 3, 3 ]
// [ 4, 4, 3 ]
// [ 4, 4, 4 ]
// [ 5, 4, 4 ]
// [ 5, 5, 4 ]
// [ 5, 5, 5 ]

// TODO
// https://stackblitz.com/edit/typescript-ihcxud?file=index.ts&devtoolsheight=50