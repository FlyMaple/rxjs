const { throwError } = require('rxjs');

const source = throwError('Error');
source.subscribe({
    next: () => console.log('next'),
    complete: () => console.log('complete'),
    error: (err) => console.log(err),
})