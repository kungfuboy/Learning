const Rx = require("rxjs/Rx");

/*  
Note: 
常见的用法是：在页面加载时发起多个请求获取数据，等全部请求完毕后再进行下一步动作
*/

// 在内部处理错误
Rx.Observable.forkJoin(
  this.$axios.get("/api1"),
  this.$axios.get("/api2"),
  this.$axios.get("/api3").catch(err => Rx.Observable.of("失败后的值"))
).subscribe(([res1, res2, res3]) => {
  this.value1 = res1;
  this.value2 = res2;
  this.value3 = res3;
});
// value3 会拿到 '失败后的值', 而不会直接抛出错误

// 在外部处理错误
const source = Rx.Observable.forkJoin(
  this.$axios.get("/api1"),
  this.$axios.get("/api2"),
  this.$axios.get("/api3")
).catch(error => Rx.Observable.of(error));

source.subscribe(([res1, res2, res3]) => {
  this.value1 = res1;
  this.value2 = res2;
  this.value3 = res3;
});
