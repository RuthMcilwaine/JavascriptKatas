// (() => { anon arrow function
// })();
//var { input } = require(`./input.js`);

const convertInput = (input) => {
  let command = input.split('\n ');
  arr = [];
  command.forEach((element) => {
    let output = element.split(' ');
    let obj = {};

    obj.direction = output[0];
    obj.distance = parseInt(output[1]);
    arr.push(obj);
  });
  return arr;
};

// use global variables without breaking encapsulation
function main() {
  let input = `forward 5
 down 5
 forward 8
 up 3
 down 8
 forward 2`;
  let converted = convertInput(input);
  console.log(calculateValue(converted));
}
//declare inside function or pass in as arguments
function calculateValue(arr) {
  let distance = 0;
  let depth = 0;
  arr.forEach((command) => {
    let value = command.distance;

    switch (command.direction) {
      case 'up':
        depth -= value;
        break;
      case 'down':
        depth += value;
        break;
      case 'forward':
        distance += value;
        break;
    }
  });
  console.log(distance);
  console.log(depth);
  return distance * depth;
}

main();
