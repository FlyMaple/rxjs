const { interval, of, throwError } = require('rxjs');
const { mergeMap, retry, map } = require('rxjs/operators');



// retry 2，重新執行2次，當第2次還是錯誤就直接發出錯誤
const source = interval(1000).pipe(
    mergeMap(_ => {
        if (_ > 5) {
            return throwError('Error');
        }

        return of(_);
    }),
    retry(1)
);

source.subscribe({
    next: _ => console.log(_),
    error: _ => console.log(`Error: ${_}`),
});