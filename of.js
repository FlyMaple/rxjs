const { of } = require('rxjs');

const source1 = of();
// source1.subscribe(_ => console.log(_));


const source2 = of(11111);
// source2.subscribe(_ => console.log(_));

const source3 = of("aaaaaaaaa");
// source3.subscribe(_ => console.log(_));


const source4 = of(true);
// source4.subscribe(_ => console.log(_));


const source5 = of([1, 2, 3]);
// source5.subscribe(_ => console.log(_));


const source6 = of({name: 'Skye', age: 18});
// source6.subscribe(_ => console.log(_));


const source7 = of(11111, "aaaaaaaaa", true, [1, 2, 3], {name: 'Skye', age: 18});
source7.subscribe(_ => console.log(_));