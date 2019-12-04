const Rx = require("rxjs/Rx");

/*
Note:
拆解并循环发出
只支持Promise
*/

// 基于输入来决定是 resolve 还是 reject 的示例 promise
const myPromise = willReject => {
  return new Promise((resolve, reject) => {
    if (willReject) {
      reject("Rejected!");
    }
    resolve("Resolved!");
  });
};
// 先发出 true，然后是 false
const source = Rx.Observable.of(true, false);
const example = source.mergeMap(val =>
  Rx.Observable
    // 将 promise 转换成 observable
    .fromPromise(myPromise(val))
    // 捕获并优雅地处理 reject 的结果
    .catch(error => Rx.Observable.of(`Error: ${error}`))
);
example.subscribe(val => console.log(val));
// 输出: 'Error: Rejected!', 'Resolved!'
