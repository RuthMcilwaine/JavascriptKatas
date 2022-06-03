var { report } = require(`./report.js`);
//let report = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];
// console.log(report);
(() => {
  let counter = 0;
  let prevSum = 0;

  for (let i = 2; i < report.length; i += 1) {
    const curSum = report[i - 2] + report[i - 1] + report[i];
    if (i === 2) {
      console.log(`${curSum} (N/A - no previous sum)`);
    } else if (curSum > prevSum) {
      counter++;
      console.log(`${curSum} (increased)`);
    } else if (curSum < prevSum) {
      console.log(`${curSum} (decreased)`);
    } else if (curSum == prevSum) {
      console.log(`${curSum} (no change)`);
    }
    prevSum = curSum;
  }
  console.log(
    `There are ${counter} sums that are larger than the previous sum.`
  );
})();
