// var name = "John";
//
// var secretsFunction = function (){
//   var pinCode = [0,0,0,0]
//   console.log("pinCode inside function", name);
// }
// secretsFunction();
// console.log("pinCode outside function", name);


// var filterNameByFirstLetter = function (names, letter) {
//   var filteredNames = [];
//   for (let name of names) {
//     if (name[0] === letter){
//       filteredNames.push(name);
//     };
//   };
//   console.log(name); //shows last name of the for loop which is Babs
//   return filteredNames;
// };
// var students = ["Alice", "Bob", "Alyssia", "Artem", "Babs"]
// var filteredStudents = filterNameByFirstLetter(students, "B")
// console.log("filteredStudents", filteredStudents);

// let isItFive = function(number) {
//   let result;
//   if (number === 5){
//     result = true
//   } else {
//     result = false
//   }
//   return result
// }
// const calculateEnergy = function(mass) {
//   const speedOfLight = 299792458;
//   // speedOfLight++; won't run as it assigned to constant
//   return mass * speedOfLight ** 2;
// };
// const energyOfMe = calculateEnergy(75);
// console.log("energyOfMe:", energyOfMe);

// const song = {
//   title: "Raspberry Beret",
//   artist: "Prince"
// };
// console.log('song before mutation', song);
// song.title = "When Doves Cry";
// console.log('song after mutation', song);

const helloWorld = function(){
  let result = "Hello World";
};
helloWorld();
console.log(result); //let will keep it not available outside this function, const will keep it not changeable
