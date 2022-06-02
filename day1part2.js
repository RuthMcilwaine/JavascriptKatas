let report = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

(() => {
  let counter = 0;
  let prevSum = 0;

  result = report
    .map((line, i, arr) => line + arr[i + 1] + arr[i + 2])
    .slice(0, report.length - 2);

  for (let i = 2; i < report.length; i += 1) {
    const curSum = report[i - 2] + report[i - 1] + report[i];
    if (i === 2) {
      console.log(`${curSum} (N/A - no previous sum)`);
    } else if (curSum == prevSum) {
      console.log(`${curSum} (no change)`);
    } else if (curSum > prevSum) {
      counter++;

      console.log(`${curSum} (increased)`);
      prevSum = curSum;
    } else if (curSum < prevSum) {
      console.log(`${curSum} (decreased)`);
    }
  }
  console.log(
    `There are ${counter} measurements that are larger than the previous measurement.`
  );
})();
