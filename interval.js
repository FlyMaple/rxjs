const { interval } = require('rxjs');

interval(1000).subscribe(_ => console.log(_));