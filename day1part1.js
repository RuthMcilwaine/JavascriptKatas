//var { report } = require(`./report.js`);  `890P[]
let report = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
let counter = 0;

for (let i = 0; i < report.length; i++) {
  let currNum = report[i];
  let prevNum = report[i - 1];

  if (i === 0) {
    console.log(`${currNum} N/A - no previous measurement`);
  } else if (currNum > prevNum) {
    counter++;

    console.log(`${currNum} (increased)`);
  } else if (currNum < prevNum) {
    console.log(`${currNum} (decreased)`);
  }
}
console.log(
  `There are ${counter} measurements that are larger than the previous measurement.`
);
