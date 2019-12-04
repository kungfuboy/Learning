const Rx = require("rxjs/Rx");

/*  
Note: 
取最先被触发的事件，然后所有事件重置，重新开始观察
*/

// 接收第一个发出值的 observable
const example = Rx.Observable.race(
  // 每1.5秒发出值
  Rx.Observable.interval(1500).mapTo("1.5s won!"),
  // 每1秒发出值
  Rx.Observable.interval(1000).mapTo("1s won!"),
  // 每2秒发出值
  Rx.Observable.interval(2000),
  // 每2.5秒发出值
  Rx.Observable.interval(2500)
);
//输出: "1s won!"..."1s won!"...etc
example.subscribe(val => console.log(val));
