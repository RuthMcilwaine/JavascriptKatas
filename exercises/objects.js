//Q1 function called displayName() that takes an object as an argument and prints the persons first and last name. use object destructuring in the function arugment. use template strings when printing the name.

// function displayName({ first, last }) {
//   console.log(`${first} ${last}`);
// }

// const person = {
//   first: 'Elon',
//   last: 'Musk',
//   twitter: '@elonmusk',
//   company: 'space X',
// };

// displayName(person);

//***************************************
//Q2 Write a function called calculateSalesTotals() which returns an array with new two new keys (sale and total). The key 'sale' equals the calculated sale price based on the original price and the discount. The key 'total' equals the computed total based on stock, the original price and the discount. You have to use Object Destructuring on the objects in the sales array and Object Default Values for the discount key. The default value would be 0.0.
// const sales = [
//   { item: 'PS4 Pro', stock: 3, original: 399.99 },
//   { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
//   { item: 'Nintendo Switch', stock: 4, original: 299.99 },
//   { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
//   { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 },
// ];
// function calculateSalesTotals(sales) {
//   let updatedSales = sales.map((sale) => {
//     //let { original, discount = 0.0 } = sale;
//     sale['sale'] = sale.original - sale.original * sale.discount;
//     sale['total'] = sale.sale * sale.stock;
//     return sale;
//   });
//   return updatedSales;
// }
// let updatedSales = calculateSalesTotals(sales);
// console.log(updatedSales);

//***************************************
//Q3 Create a function named goToSecondClass() that accepts a destructured object as a parameter. The parameter extracts the "secondHour" property of the object.

// function goToSecondClass({ secondHour }) {
//   return `Time to go to ${secondHour} class!`;
// }

// const myClasses = {
//   firstHour: 'Ethics',
//   secondHour: 'Programming',
//   thirdHour: 'Biology',
// };

// console.log(goToSecondClass(myClasses));

//***************************************
//Q4 Using array destructuring assign the first 2 elements to firstColor and secondColor variables and assign the remaining elements to otherColors variable. Display the values of these 3 variables.

// let colors = ['white', 'blue', 'yellow', 'black', 'red', 'green'];

// let [firstColor, secondColor, ...otherColors] = colors;
// console.log(firstColor);
// console.log(secondColor);
// console.log(otherColors);

//***************************************
// let person = {
//   firstName: 'John',
//   lastName: 'Doe',
//   middleName: 'C.',
//   currentAge: 28,
// };

// let { firstName, lastName, middleName = '', currentAge: age = 18 } = person;

// console.log(middleName); // 'C.'
// console.log(age); // 28

//***************************************

let employee = {
  id: 1001,
  name: {
    firstName: 'John',
    lastName: 'Doe',
  },
};

let {
  name: { firstName, lastName },
  name,
} = employee;

console.log(firstName); // John
console.log(lastName); // Doe
console.log(name); // { firstName: 'John', lastName: 'Doe' }
