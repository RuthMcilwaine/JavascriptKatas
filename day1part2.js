let reportObject = {
  A: [199, 200, 208],
  B: [200, 208, 210],
  C: [208, 210, 200],
  D: [210, 200, 207],
  E: [200, 207, 240],
  F: [207, 240, 269],
  G: [240, 269, 260],
};

for (const [key] of Object.entries(reportObject)) {
  let sum = 0;
  for (const value of Object.values(reportObject[key])) {
    sum += value;
  }
  console.log(`${key}: ` + sum);
}
