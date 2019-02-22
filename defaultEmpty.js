const { of } = require('rxjs');
const { mapTo, defaultIfEmpty } = require('rxjs/operators');

of().pipe(
    defaultIfEmpty('Empty'),
).subscribe(_ => console.log(_));