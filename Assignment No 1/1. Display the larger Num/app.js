let firstNum = +prompt("Enter Your First Number");
let secondNum = +prompt("Enter Your Second Number");

if (firstNum > secondNum){
    console.log(firstNum , " is Larger.");
} else if (secondNum > firstNum) {
    console.log( secondNum , " is Larger.");

}

else {
    console.log ("Your Both Numbers are Equal....  please try Again! ");
}