const { interval, merge } = require('rxjs');
const { mapTo } = require('rxjs/operators');

const first = interval(2500).pipe(mapTo('First'));
const two = interval(2000).pipe(mapTo('Two'));
const third = interval(1500).pipe(mapTo('Third'));
const fourth = interval(1000).pipe(mapTo('Fourth'));

// merge 中任一 observable 發出值就訂閱，並行執行的概念
const example = merge(first, two, third, fourth).subscribe(_ => console.log(_));