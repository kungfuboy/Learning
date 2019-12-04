const Rx = require("rxjs/Rx");

/*  
Note: 
concat 既有实例方法，也有静态方法
*/

// of 操作符，理解为发出
const sourceOne = Rx.Observable.of(1, 3, 5);
const sourceTwo = Rx.Observable.of(2, 4, 6);

// 实例方法
sourceOne.concat(sourceTwo).subscribe(val => console.log(val));
// output: 1, 3, 5, 2, 4, 6

// 静态方法
Rx.Observable.concat(sourceOne, sourceTwo).subscribe(val => console.log(val));
// output: 1, 3, 5, 2, 4, 6

const sourceThree = sourceOne.delay(3000);
sourceThree.concat(sourceTwo).subscribe(val => console.log(val));
// sourceTwo 要等待 sourceThree 完成才能订阅
// output: 1, 3, 5, 2, 4, 6

Rx.Observable.concat(
  Rx.Observable.interval(1000).take(5),
  Rx.Observable.of("A", "B", "C")
).subscribe(val => console.log(val));
// 会等待派发完成后才开始订阅，在这里要等10秒
// output: 0,1,2,3,4....
