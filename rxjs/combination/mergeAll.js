const Rx = require("rxjs/Rx");

/*  
Note: 
很多情况下，可以直接使用mergeMap
mergeMap = map + mergeAll
*/

const myPromise = val =>
  new Promise(resolve => setTimeout(() => resolve(`Result: ${val}`), 2000));
// 发出 1,2,3
const source = Rx.Observable.of(1, 2, 3);

const example = source
  // 将每个值映射成 promise
  .map(val => myPromise(val))
  // 发出 source 的结果
  .mergeAll();

/*
  输出:
  "Result: 1"
  "Result: 2"
  "Result: 3"
*/
example.subscribe(val => console.log(val));
