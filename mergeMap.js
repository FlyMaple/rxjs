const { timer, of, interval, from, merge } = require('rxjs');
const { map, mapTo, take, mergeMap } = require('rxjs/operators');

const source = of('Hello');
const example = source.pipe(
    mergeMap(_ => of(`${_} World!`))
);
example.subscribe(console.log);


const myPromise = val => new Promise(resolve => resolve(`${val} World!`));
const source2 = of('Hello');
const example2 = source2.pipe(
    mergeMap(_ => myPromise(_), (valueFromSource, valueFromPromise) => {
        return `valueFromSource: ${valueFromSource}, valueFromPromise: ${valueFromPromise}`
    })
);
example2.subscribe(console.log);
