const Rx = require("rxjs/Rx");

// 1秒后发出值
// 输出副作用，然后发出结果
const example = Rx.Observable.timer(1000)
  .do(() => console.log("副作用"))
  .mapTo("AAA");
/*
 ***不共享的话，副作用会执行两次***
 */
// example.subscribe(val => console.log(val));
// example.subscribe(val => console.log(val));

// 在多个订阅者间共享 observable, 副作用只会执行一次
const sharedExample = example.share();
sharedExample.subscribe(val => console.log(val));
sharedExample.subscribe(val => console.log(val));
sharedExample.subscribe(val => console.log(val));
