const Rx = require("rxjs/Rx");

/*
Note:
拆解并循环发出
只支持事件
*/

// 创建发出点击事件的 observable
const source = Rx.Observable.fromEvent(document, "click");
// 映射成给定的事件时间戳
const example = source.map(event => `Event time: ${event.timeStamp}`);
example.subscribe(val => console.log(val));
// output: 'Event time: 7276.390000000001'
