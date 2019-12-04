const Rx = require("rxjs/Rx");

/*  
Note: 
merge 既有静态方法，也有实例方法
*/

// 每2.5秒发出值
const first = Rx.Observable.interval(3500);
// 每2秒发出值
const second = Rx.Observable.interval(5000);
// 每1.5秒发出值
const third = Rx.Observable.interval(1000);

// 从一个 observable 中发出输出值
const example = Rx.Observable.merge(
  first.mapTo("A"),
  second.mapTo("B"),
  third.mapTo("C")
);
example.subscribe(val => console.log(val));
// output: C, C, C, A, C, B ...

// 每2.5秒发出值
const first = Rx.Observable.interval(2500);
// 每1秒发出值
const second = Rx.Observable.interval(1000);
// 作为实例方法使用
const example = first.merge(second);
example.subscribe(val => console.log(val));
// output: 0,1,0,2....
w;
