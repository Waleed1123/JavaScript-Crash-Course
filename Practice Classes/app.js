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


function fectorial (num) {
    if (num > 1) {
        return num * fectorial(num - 1)
    }
    return 1;

}


console.log(fectorial(5));







