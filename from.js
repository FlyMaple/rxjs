const { from, of } = require('rxjs');
const { mergeMap, mergeAll } = require('rxjs/operators');


// 將陣列轉成 observable
const source = from([1, 2, 3, 4, 5]);
source.subscribe(_ => console.log(_));


// 
const source2 = of(1, 2, 3, 4, 5);
source2.subscribe(_ => console.log(_));


// 將陣列轉成 observable
const source3 = of([1, 2, 3, 4, 5]).pipe(
    mergeMap(_ => {
        return of(..._.map(a => of(a)))
    }),
    mergeAll()
);
source3.subscribe(_ => console.log(_));


// 將 promise 轉成 observable
const source4 = from(new Promise(resolve => resolve('yoyo')));
source4.subscribe(_ => console.log(_));


// 將集合轉為 observable
const mappp = new Map();
mappp.set(1, 'Skye');
mappp.set(2, 'Kai');
const source5 = from(mappp);
source5.subscribe(_ => console.log(_));


// 將集合轉為 observable
const set = new Set();
set.add(111).add(222);
const source6 = from(set);
source6.subscribe(_ => console.log(_));


// 將字串轉為 observable
const source7 = from('skye');
source7.subscribe(_ => console.log(_));