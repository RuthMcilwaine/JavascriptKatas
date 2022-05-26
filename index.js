let report = [
199,
200,
208,
210,
200,
207,
240,
269,
260,
263
]

const timesDepthIncreases = (report) => {

for (let i = 0; i < report.length; i++) {
  for (let k = i + 1; k < report.length; k++) {
      if (report[i] !== "" && report[i] > report[k]) {
        return console.log(`${report[i]} (increased)`)
      } else {
        return console.log(`${report[k]} (decreased)`)
      }
  }
}

}

console.log(timesDepthIncreases(report));