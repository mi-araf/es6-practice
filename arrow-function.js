// 3 - Arrow function (es6)
const makeDouble = num => num * 2;
// same as, const makeDouble = (num) => num * 2;
const makeDoubleResult = makeDouble(20);
console.log(makeDoubleResult);

// 3.2 - Arrow fun with parameters
const add = (x, y) => x + y;
console.log(add(16, 34));

// 3.3 - Arrow fun without parameter
const sayHi = () => "hello";
console.log(sayHi());

// 3.4 - Arrow fun without parameter
const sayHiConsole = () => console.log("Hi, hello");
sayHiConsole();

// 3.5 - Arrow fun with curly brcae {}
const myNameFun = myName => `My name is ${myName}.`;
console.log(myNameFun('Araf'));

// 3.6 - multiline arrow funtion (need to return)
const sumDifMul = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}
const sumDifMulResult = sumDifMul(9, 3);
console.log(sumDifMulResult);



// 1 - tradational / old function
function double(num) {
    return num * 2;
}
const result = double(5);
console.log(result);


// 2 - declaring & assigning a function into a variable
const squareFunName = function(num) {
    return num * num;
}
// console.log(squareFunName(7));
const squareResult = squareFunName(3);
console.log(squareResult);