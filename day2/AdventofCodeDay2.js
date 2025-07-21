// const { input } = require(`./input.js`);
import input from './input.js';

const convertInput = (input) => {
  let command = input.split('\n '); //['forward 5', 'down 5','forward 8', 'up 3', 'down 8', 'forward 2']

  let distance = 0;
  let depth = 0;
  for (element of command) {
    let obj = {};

    let output = element.split(' '); //['forward', '5']
    let direction = output[0]; //'forward'

    if (!isNaN(parseInt(output[1]))) {
      var value = parseInt(output[1]); //5
    }
    switch (direction) {
      case 'forward':
        distance += value;
        break;

      case 'down':
        depth += value;
        break;

      case 'up':
        depth -= value;
        break;

      default:
        console.log('something went wrong');
        break;
    }
  }
  // console.log(distance);
  // console.log(depth);
  return distance * depth;
};

// use global variables without breaking encapsulation

// let input = `forward 5
//  down 5
//  forward 8
//  up 3
//  down 8
//  forward 2`;
let converted = convertInput(input);

function main() {
  console.log(converted);
}

main();
