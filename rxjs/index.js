const Rx = require("rxjs");
const { distinctUntilChanged } = require("rxjs/operators");

const sampleObject = { name: "Test" };
// 对象必须有相同的引用
const myArrayWithDuplicateObjects = Rx.from([
  sampleObject,
  sampleObject,
  sampleObject
]);
// 基于最新发出的值进行比较，只输出不同的对象
myArrayWithDuplicateObjects
  .pipe(distinctUntilChanged())
  // 输出: 'DISTINCT OBJECTS: {name: 'Test'}
  .subscribe(val => console.log("DISTINCT OBJECTS:", val));
