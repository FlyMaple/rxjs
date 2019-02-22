const { timer } = require('rxjs');

console.log("==start");

const source1 = timer(3000);
source1.subscribe(_ => console.log(_));

const source2 = timer(5000, 1000);
// source2.subscribe(_ => console.log(_));