// function sayHello(greeting, name = "World"){
//   return `${greeting} ${name}!`;
// };
//
// console.log("sayHello massage:", sayHello("Hi", "John"));

// var add = function (firstNumber, secondNumber) {
//   return firstNumber + secondNumber;
// }; //anonymous function
// console.log("1 + 3 with add function:", add(1,3));

// Declare a named function that takes an array of numbers, and returns the sum, or total, of all of the numbers in the array.
//
// 2. Define an anonymous function expression that takes two arguments:
//
// an object, for example, { name: 'Wojtek', age: 30 }
// a string, for exmaple, 'name'
// Your function should return true if the given string is a key on the given object and false if the object does not have a key that matches the string. Store this function in an appropriately named variable to invoke it.

// function calculateTotal(numbers) {
//    var total = 0;
//   for (var number of numbers) {
//   total += number;
// };
// return total;
// };
// var sum = calculateTotal([15,18,22,43]);
// console.log("sum of numbers:", sum);

var objectHasKey = function(object, searchString) {
  for (var key in object) {
    if (searchString === key) {
      return true;
    };
  };
  return false
}
var person = {name: "John", age: 34};
var keyIsFound = objectHasKey(person, "name");
var keyIsNotFound = objectHasKey(person, "email");

console.log('key is found', keyIsFound);
console.log('key is not found', keyIsNotFound);

// var multiply = (firstNumber, secondNumber) =>
//   firstNumber * secondNumber;
// //arrow function
// console.log(multiply(2,5));
