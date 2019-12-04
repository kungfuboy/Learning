const Rx = require("rxjs/Rx");

// 每1秒发出值
const source = Rx.Observable.interval(1000);
const example = source
  // 副作用只会执行1次
  .do(() => console.log("Do Something!"))
  // 不会做任何事直到被connect()调用
  .publish();

/*
  source 不会发出任何值直到 connect() 被调用
  输出: (5秒后)
  "Do Something!"
  "Subscriber One: 0"
  "Subscriber Two: 0"
  "Do Something!"
  "Subscriber One: 1"
  "Subscriber Two: 1"
*/
const subscribe = example.subscribe(val =>
  console.log(`Subscriber One: ${val}`)
);
const subscribeTwo = example.subscribe(val =>
  console.log(`Subscriber Two: ${val}`)
);

// 5秒后调用 connect，这会使得 source 开始发出值
setTimeout(() => {
  example.connect();
}, 5000);
