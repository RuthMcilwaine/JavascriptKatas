// let arr = [
//   ' avengers',
//   '   captain_america',
//   'ironman   ',
//   ' black panther   ',
// ];

// function cleanNames(arr) {
//   return arr.map((name) => name.trim());
// }

// console.log(cleanNames(arr));

//*****************************

// function convert(arr) {
//   return arr.map((number) => number * 1.6);
// }

// const km = convert([1, 2, 3, 4, 5, 6]);
// console.log(`km :` + km);
// let total = km.reduce((accumulator, currentValue)=>{
//   return accumulator + currentValue;
// }, 0);

// console.log(`totalDistanceInKm: ${total}`);
//*****************************

// let nums = [25, 45, 55, 77, 88, 99];

// const square = nums.map(num => num * num);
// console.log(`square : ${square}`);
// let average = square.reduce((acc, currentValue) => acc + currentValue, 0)/nums.length;
// let avg = Math.round(average)
// console.log(`avg : ${avg}`);

//*****************************

// let numbers = [4, -4, 10, 203, 53, 11];
// console.log(numbers.map(number => number + 4));
//*****************************

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let getEven = numbers.filter(number => number%2 === 0)
// let doubleEven = getEven.map(even => even*even)
// let reduceSum = doubleEven.reduce((acc, cur) => acc + cur, 0);

// console.log(`getEven: ${getEven}`);
// console.log(`doubleEven: ${doubleEven}`);
// console.log(`reduce: ${reduceSum}`);

//*****************************

//Q6: new array whose elements is in uppercase of words present in the original array
// let strings = ["avengers", "captain america", "ironman", "black panther"];
// let stringsUpper = strings.map(string => string.toUpperCase())
// console.log(stringsUpper);

//*****************************

//Q7: Use the .map() method on the heros array to return a new array. (array of objects)

// const heros = [
//   { name: 'Spider-Man' },
//   { name: 'Thor' },
//   { name: 'Black Panther' },
//   { name: 'Captain Marvel' },
//   { name: 'Silver Surfer' }
// ];

// const arr = heros.map((hero, index) =>{
//   return {id:index, hero:hero.name}
// });
// console.log(arr)

//*****************************

//Q8: Write JavaScript statements that will produce the last 3 from array.

// const inputWords = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

//console.log(inputWords.slice(-3));
// const longWords = inputWords.filter(word=>word.length>6)
// console.log(longWords);

//*****************************

//Q9: use filter, map, and reduce to produce the following

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumbers = numbers.filter(number => number%3 === 0);
// console.log(oddNumbers);
//An array of numbers divisible by 2 or 5.
// const divisibleBy2or5 = numbers.filter(number => number%2 === 0 || number%5 === 0);
// console.log(divisibleBy2or5);
//An array of numbers divisible by 3 and then squared those numbers.
// const squared = oddNumbers.map(odd => odd*odd);
// console.log(squared)
//The sum of the following: square the numbers divisible by 5.
// const divisibleBy5AndSquared = numbers.filter(number => number%5 === 0).map(number => number*number);
// console.log(divisibleBy5AndSquared);

//Q10 use filter and map functions to filter

// let nums = [11, 22, 33, 46, 75, 86, 97, 98];
// let squaredEvenNums = nums.filter(number => number%2 === 0).map(number => number*number);

// let sumOfNums = nums.reduce((acc, cur)=>{
//   return acc + cur;
// }, 0);

//console.log(`squaredEvenNums: ` + squaredEvenNums);
//console.log(sumOfNums);

// Q11 create a function that takes in an array of numbers and multiply each of the elements by 2.

// function Myfunc(numbers){
//   return numbers.map(number => number*2);
// }

// console.log(Myfunc([1,2,3]));
