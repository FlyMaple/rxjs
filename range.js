const { range } = require('rxjs');

range(0, 100).subscribe(_ => console.log(_));