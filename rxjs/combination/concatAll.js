const Rx = require("rxjs/Rx");

/*  
Note: 
很多情况下可以直接使用 concatMap 来代替 concatAll
concatMap = map + concatAll
*/

// 每2秒发出值
const source = Rx.Observable.interval(2000);
const example = source
  // 为了演示，增加10并作为 observable 返回
  .map(val => Rx.Observable.of(val + 10))
  // 合并内部 observables 的值
  .concatAll();
// 输出: 'Example with Basic Observable 10', 'Example with Basic Observable 11'...
example.subscribe(val => console.log("Example with Basic Observable:", val));

const samplePromise = val => new Promise(resolve => resolve(val));
// 每2秒发出值
const source = Rx.Observable.interval(2000);
const example = source
  .map(val => samplePromise(val + 5))
  // 合并解析过的 promise 的值
  .concatAll();
// 输出: 'Example with Promise 0', 'Example with Promise 1'...
example.subscribe(val => console.log("Example with Promise:", val));

const obs1 = Rx.Observable.interval(1000).take(5);
const obs2 = Rx.Observable.interval(500).take(2);
const obs3 = Rx.Observable.interval(2000).take(1);
// 发出3个 observables
const source = Rx.Observable.of(obs1, obs2, obs3);
// 按顺序订阅每个内部 obserable，前一个完成了再订阅下一个
const example = source.concatAll();
/*
  output: 0,1,2,3,4,0,1,0
  订阅每个内部 observable 并发出值，当一个完成了才订阅下一个
  obs1 complete 了才开始订阅 obs2， obs2 complete 之后才开始订阅 obs3
*/
example.subscribe(val => console.log(val));
