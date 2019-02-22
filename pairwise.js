const { interval, Observable } = require('rxjs');
const { startWith, pairwise, take } = require('rxjs/operators');

// pairwise 會保留上一個值，並且和現在發出的值形成陣列發出
// 初始值為0
// take 2 放在 pairwise 之後，會是 pairwise 產出的陣列取兩次，不是 interval 兩次
const source = interval(1000).pipe(
    pairwise(),
    take(2)
);
source.subscribe(_ => console.log(_))

const source2 = new Observable(observe => {
    let count = 0;

    setInterval(() => {
        observe.next(`${count++}`);

        // if (count === 2) {
        //     observe.complete();
        // }
    }, 1000)
}).pipe(
    pairwise()
);
// source2.subscribe(_ => console.log(_));