const { throwError, of } = require('rxjs');
const { catchError, mergeMap } = require('rxjs/operators');

const source = throwError('Error').pipe(
    catchError(() => of('Error~~~~~'))
);
// source.subscribe(_ => console.log(_));


const myPromise = val => new Promise((resolve, reject) => setTimeout(() => reject(val), 3000))



// catch Promise reject 
const source2 = of(1).pipe(
    mergeMap(_ => myPromise('reject')),
    catchError(_ => of(`${_} ~~~~~`))
);
source2.subscribe(_ => console.log(_));