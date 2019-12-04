const Rx = require("rxjs/Rx");

const timerOne = Rx.Observable.timer(1000, 1000);
const timerTwo = Rx.Observable.timer(1000, 4000);

Rx.Observable.combineLatest(timerOne, timerTwo).subscribe(latestValues => {
  const [one, two] = latestValues;
  //   console.log(one, two);
});

Rx.Observable.combineLatest(timerOne, timerTwo, (one, two) => {
  return `${one}, ${two}`;
}).subscribe(latestValues => {
  console.log(latestValues);
});

/*  
Note: 
combineLatest 直到每个 observable 都至少发出一个值后才会发出初始值。
*/
