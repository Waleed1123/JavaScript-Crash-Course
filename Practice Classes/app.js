// Functions

// function greet (name) {  // Parameter
//     console.log("Hello " + name);
// }

// greet("Waleed"); // Argument
// greet("Aman"); // Argument
// greet("Zaran"); // Argument


// function employee (fileNo){
//     return "I am Working On File No: " + fileNo

// }
// let file = employee(48);
// console.log(file);


// Add Function 

// function add (num1, num2){
//     return num1 + num2;

// }

// let result = add("Hello ", "World");

// document.write(result)

// console.log ("Result: " + result);

// Recursion

// function recursion (data, times) {
//     document.write(data);

//     if (times > 0){
//         recursion(data, times - 1);
//     }


// }

// recursion("Hello", 5);


// function fectorial (num) {
//     if (num > 1) {
//         return num * fectorial(num - 1)
//     }
//     return 1;

// }


// console.log(fectorial(5));



// Class No 5 

// Array

// let arr = ["January", "Febuary", "March", "April"]

// // console.log(arr);

// let shouldIAdd = prompt("Rakhun Value Ya Nai?")

//     if (shouldIAdd === "yes"){

//     }
//     console.log(arr);

// let arr = ["January", "Febuary", "March", "April"];

// arr.shift(); // Removes First Index
// arr.unshift("jan"); // Add value at 0 index
// arr.push("May", "June" ); // use to add value at the end of arrey
// arr.pop(); // use to Remove value at the end of arrey
// arr.length // Tells the length of an array 
// arr.splice(1, 1, "June", "July", "August"); // Removes Value.. First No => Index, 
//                                   Second No => No of Values to be Removed
//                                   Third No => To Add New values at the same Place

// let newArr = arr.slice(0, 2) // Provides a New Array

// console.log(arr);
// console.log(newArr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// arr.forEach // Loops Through Array Values

// arr.forEach(function(value, index){

//     console.log(value, index);
// });

// arr.filter  // Filters Array Values

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let filteredArray = arr.filter(function(val){
//     return val % 2 === 0;
//     // if (val % 2 === 0){
//     //     return true;
//     // } else {
//     //     return false;
//     // }

// });

// console.log(filteredArray, arr);


// arr.sort() // Sorts Array Values

// let arr = [10, 7, 3, 9, 5, 6, 2, 8, 4,1 ];

// let sortedArr = arr.sort(function(a, b){
//     if (a < b){
//         return 1;
//     } else {
//         return -1;
//     }

// });

// console.log(sortedArr);


// Reduce 

// let arr = [10, 7, 3, 9, 5, 6, 2, 8, 4, 1, 24, 6, 87];

// let total = arr.reduce(function (previousval, currentval,) {

//     return previousval + currentval;

// }, 0);

// console.log("total: " + total);


// let arr = ["Happy", "Birthday", "Waleed"];

// let greet = arr.reduce(function (previousval, currentval,) {

//     return previousval + " " + currentval;

// }, "");

// console.log("greet: " + greet);


// array.map || Scarch On Google









// CLASS NO 6


// Objects 

// let person = {
//     name: "Waleed Ahmed",
//     age: 17,
//     Gender: "Male",
//     isMarried: "Single",
//     Skill: "Softwear Developer",
//     speak: function(sentence){
//         console.log(sentence + this.name);
//     }
// };
// person.speak("Hello I am ");
// console.log()


var myNum = 4;
function num (myNum){
    console.log(myNum);

}
myNum = 3;

console.log(num(25));














