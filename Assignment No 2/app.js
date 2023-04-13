
// Question No 1 

function value (value1) {
    return function (value2){
        return value1 + value2; 
    }
}

let result = value(5);
console.log(result(25));




// Question No 2 

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function searchArray(arr, _val) {
    if (arr.length === 0) {
        return false;
    }


 if (arrayName.find(element => element === _val)) { 
        
        //console.log("Value Found");
        return true;
    } 
    else {
        return searchArray(arrayName.slice(1), _val); 
    }
}

let value1 = searchArray(tempArray, 30);
console.log("Condition met and the result is " + value1); 
let value2 = searchArray(tempArray, 33);
console.log("Variable not found in the array and the result is " + value2);

// Question No 3


function addParagraph(val1){
    let newPara = document.createElement('p'); 
    let newText = document.createTextNode(val1);
    newPara.appendChild(newText); 
    document.body.appendChild(newPara);  
}

addParagraph("New ParaGraph");

// Question No 4


function addListitem(addListitem){
    let newListitem = document.createElement('li'); 
    let newText = document.createTextNode(addListitem); 
    newListitem.appendChild(newText); 
    let parentList = document.querySelector('#question4');
    parentList.appendChild(newListitem);
}

addListitem("New List item Will be added");




function saveToLocalStorage(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
  }
const tempObject = [3, 10, 18, 20, 30, 40, 50, 60, 70];
saveToLocalStorage("justaKeyName", tempObject);




/* ----------------------------------------------------- */

// Question No 7



console.log("Question # 7");
function getObjFromLocalStorage(key) {
    let prevObject = localStorage.getItem(key);
    if (prevObject) {
      return JSON.parse(prevObject);
    } else {
      return "not found";
    }
  }

  let objRetuned = getObjFromLocalStorage("justaKeyName");
  console.log(objRetuned);



/* ----------------------------------------------------- */

// Question No 8


console.log("Question # 8");
function saveObjToLocalStorage(obj) {
    // save each property to localStorage
    for (let propt in obj) {
      localStorage.setItem(propt, obj[propt]);
    }
  
    // retrieve the object from localStorage and return it
    let newObj = {};
    for (let propt in obj) {
      newObj[propt] = localStorage.getItem(propt);
    }
    return newObj;
  }

let myObj = {
    name: "Fareed",
    age: 30,
    city: "Karachi",
    language: "Urdu",
};
let newObj = saveObjToLocalStorage(myObj);
console.log(newObj);
