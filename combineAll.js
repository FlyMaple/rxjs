const { interval } = require('rxjs');
const { take, map, combineAll } = require('rxjs/operators');

// 第一層每秒發出一個值，共取兩次
const source = interval(1000).pipe(
    take(2),
);

// 將第一層每次發出的值轉換成(map) interval observable，每秒發出一個值，共取五次
// 所以第一層的兩個值，會變成兩個每秒發出值的 observable
const example = source.pipe(
    map((value, index) => {
        return interval(1000).pipe(
            take(5),
            map((_value, _index) => {
                return `Result (${value}): ${_value}`
            })
        );
    })
);

// combineAll (n)，當內部 n 個 observable 任一個發出新的值，
// 其他 observable 就會一併發出當下最新值，
// 但是前提是其他的 observable 都有發出過值了
// like combineLaster operator
const combined = example.pipe(
    combineAll()
).subscribe(_ => console.log(_));

/**
－０－１｜
　｜　｜－０－１－２－３－４｜
　｜－０－１－２－３－４｜
 */

// [ 'Result (0): 0', 'Result (1): 0' ]
// [ 'Result (0): 1', 'Result (1): 0' ]
// [ 'Result (0): 1', 'Result (1): 1' ]
// [ 'Result (0): 2', 'Result (1): 1' ]
// [ 'Result (0): 2', 'Result (1): 2' ]
// [ 'Result (0): 3', 'Result (1): 2' ]
// [ 'Result (0): 3', 'Result (1): 3' ]
// [ 'Result (0): 4', 'Result (1): 3' ]
// [ 'Result (0): 4', 'Result (1): 4' ]