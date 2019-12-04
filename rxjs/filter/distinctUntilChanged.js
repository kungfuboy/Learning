const Rx = require("rxjs/Rx");

const sampleObject = { name: "Test" };
// 如果是值类型则比较值，如果是引用类型则比较引用地址
const myArrayWithDuplicateObjects = Rx.Observable.from([
  sampleObject,
  sampleObject,
  { name: "John" }
]);
// 基于最新发出的值进行比较，只输出不同的对象
myArrayWithDuplicateObjects
  .distinctUntilChanged()
  .subscribe(val => console.log("DISTINCT OBJECTS:", val));
// output: 'DISTINCT OBJECTS: {name: 'Test'}, { name: "John" }
