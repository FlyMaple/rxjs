const { Observable } = require('rxjs');

const source = Observable.create(observe => {
    setTimeout(() => observe.next(1), 1000);
    setTimeout(() => observe.next(2), 2000);
});
// source.subscribe(_ => console.log(_));


const source2 = Observable.create(observe => {
    let count = 0;

    const interval = setInterval(() => {
        if (count % 2 === 0) {
            observe.next(count)
        }

        count++;
    }, 1000);

    return () => clearInterval(interval);
});
const example = source2.subscribe(_ => console.log(_));

setTimeout(() => example.unsubscribe(), 10 * 1000);