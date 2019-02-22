const { empty, of } = require('rxjs');


// 創建一個空的 observable
const source1 = empty().subscribe({
    next: () => console.log('Next'),
    complete: () => console.log('Complete')
});

const source2 = of().subscribe({
    next: () => console.log('Next'),
    complete: () => console.log('Complete')
});


// TODO
// https://stackblitz.com/edit/typescript-uujo8t?file=index.ts&devtoolsheight=50