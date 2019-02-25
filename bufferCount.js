const { timer, of, interval, from } = require('rxjs');
const { bufferCount } = require('rxjs/operators');

// bufferCount 3，keep 3次就會發出
// 第2個參數給1，下一次就不會 keep 3個才發出，
// 是又來1個就隨上一次資料發出，上一次資料最前1個會被剃除
// 第2個參數給2，下一次就不會 keep 3個才發出，
// 是又來2個就隨上一次資料發出，上一次資料最前2個會被剃除
// 第2個參數給3，下一次就不會 keep 3個才發出，
// 是又來3個就隨上一次資料發出，上一次資料最前3個會被剃除
const source = interval(1000);
const example = source.pipe(
    bufferCount(3, 1)
);
example.subscribe(console.log);