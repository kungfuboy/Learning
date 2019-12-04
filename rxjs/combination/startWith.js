const Rx = require("rxjs/Rx");

// 每1秒发出值
const source = Rx.Observable.interval(1000);
// 以 -3, -2, -1 开始
const example = source.startWith(-3, -2, -1);
example.subscribe(val => console.log(val));
// output: -3, -2, -1, 0, 1, 2....
