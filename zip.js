const { of, zip, interval } = require('rxjs');
const { delay, take } = require('rxjs/operators');

const sourceOne = of('One');
const sourceTwo = of('Two');
const sourceThree = of('Three');
const sourceFour = of('Four');

// zip 中的 observable 都 complete 以後，拿相同 index 的值出來
const example = zip(
    sourceOne.pipe(delay(1000)),
    sourceTwo.pipe(delay(2000)),
    sourceThree.pipe(delay(3000)),
    sourceFour.pipe(delay(4000)),
    interval(1000).pipe(take(5)),
);
// example.subscribe(_ => console.log(_));



// zip 中的 observable 都 complete 以後，拿相同 index 的值出來
const source = interval(1000);

const example2 = zip(
    source,
    source.pipe(take(2))
);
example2.subscribe(_ => console.log(_));