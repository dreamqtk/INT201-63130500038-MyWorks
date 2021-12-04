//function expression
const doSomething=function (n1, n2, n3){
    return n1 + n2 + n3;
};

console.log(doSomething(5, 2, 1)); //8


const findSum = function sum(n) {
    if (n <= 1) 
        return 1;
    else 
        return n + sum(n -1 ); //5+sum(4)+sum(3)+sum(2)+sum(1) //5+4+3+2+1
};
console.log(findSum(5));//15

//simple function
function area(width, height) {
    return width * height;
  }
  
  console.log(area(5, 4));

//Function Declarations
//1.
function helloSomeone(name) {
    return `Hello, ${name}`;
  }
  
//2.
function area(width, height) {
    return width * height;
  }
  
//3.
function evenNum(num) {
    if (num % 2 === 0) return true;
    else return false;
  }
const helloSomeone = name => `Hello, ${name}`;

//const area (width, height) => width * height

const evenNum = num => (num % 2 == 0);

// const random = (param, param, ...) => {
//     statement 1
//     statement 2
//     statement 3
//     return value;
// }

console.log(helloSomeone('asdas'));
console.log(area(2, 3));
console.log(evenNum(654655));