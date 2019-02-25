const { timer, of, interval } = require('rxjs');
const { filter } = require('rxjs/operators');

const source = of(1, 2, 3, 4, 5);

const example = source.pipe(filter(value => value % 2 === 0));
example.subscribe(console.log);


const source2 = of({ name: 'Skye', age: 18 }, { name: 'Kai', age: 20 }, { name: 'rs', age: 30 });

const example2 = source2.pipe(
    filter(_ => _.age <= 20)
);
example2.subscribe(console.log);