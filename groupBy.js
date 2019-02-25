const { timer, of, interval, from, merge } = require('rxjs');
const { take, expand, delay, groupBy, mergeAll, mergeMap, toArray } = require('rxjs/operators');

const people = [
    { name: 'Sue', age: 25 },
    { name: 'Joe', age: 30 },
    { name: 'Frank', age: 25 },
    { name: 'Sarah', age: 35 }
];

const source = from(people);

const example = source.pipe(
    groupBy(person => person.age),
    mergeMap(group => {
        return group.pipe(toArray());
    })
);
example.subscribe(console.log)