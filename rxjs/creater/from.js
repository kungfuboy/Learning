const Rx = require("rxjs/Rx");

/*
Note:
拆解并循环发出
支持数组、Map、字符串、Promise多种序列集合
*/

// 将字符串作为字符序列发出
const source = Rx.Observable.from("Hello World");
// output: 'H','e','l','l','o',' ','W','o','r','l','d'
source.subscribe(val => console.log(val));
