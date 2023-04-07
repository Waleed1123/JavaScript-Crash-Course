let Num1 = +prompt("Enter Your First Number");
let Num2 = +prompt("Enter Your Second Number");
let Num3 = +prompt("Enter Your Third Number");
let Num4 = +prompt("Enter Your Forth Number");
let Num5 = +prompt("Enter Your Fifth Number");


if (Num1 > Num2 && Num1 > Num3 && Num1 > Num4 && Num1 > Num5 ) {

    console.log("Your Number 1:  " + Num1 + " is Largest of all");

} else if (Num2 > Num1 && Num2 > Num3 && Num2 > Num4 && Num2 > Num5){

    console.log("Your Number 2:  " + Num2 + " is Largest of all");
  
}  else if (Num3 > Num1 && Num3 > Num2 && Num3 > Num4 && Num3 > Num5){
    
    console.log("Your Number 3:  " + Num3 + " is Largest of all");

} else if (Num4 > Num1 && Num4 > Num2 && Num4 > Num3 && Num4 > Num5){
    
    console.log("Your Number 4:  " + Num4 + " is Largest of all");

} else if (Num5 > Num1 && Num5 > Num2 && Num5 > Num3 && Num5 > Num4){
    
    console.log("Your Number 5:  " + Num5 + " is Largest of all");

} else {
    console.log ("All Numbers Are Equal");
}