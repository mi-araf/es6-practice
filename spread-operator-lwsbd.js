// spread operator by learn with sumit - BD (lwsbd)
// ! spread operator used in call/log/function calling
// ! rest operator is used in function parameter

const numbers = [1, 2, 3];

// 1.
var newNumbers = [numbers[0], numbers[1], numbers[2], 4, 5];
console.log(newNumbers);

// 2.
let newNumbersSpread = [...numbers, 4, 5, 6];
console.log(newNumbersSpread);

// 3.
var copyNumbersSpread = [...numbers]; // an exact copy of 'numbers' array
var copyNumbers = numbers;      // will be same as the 'numbers' array

numbers.push(69);

console.log(numbers);      // [ 1, 2, 3, 69 ]
console.log(copyNumbersSpread);  // [ 1, 2, 3 ]
console.log(copyNumbers);  // [ 1, 2, 3, 69 ]

// 4.
let num1 = [1, 2, 3];
let num2 = [4, 5, 6];

var numSpread = [...num1, ...num2];
var numArray = [num1, num2];
console.log(numSpread);   // [ 1, 2, 3, 4, 5, 6 ]
console.log(numArray);   // [ [ 1, 2, 3 ], [ 4, 5, 6 ] ]

// 5. string
{
let str = 'Mushfiq Araf';
console.log(`${str} is spreaded:`, ...str);
// M u s h f i q   A r a f
console.log(`${str} is spreaded (for object):`, {...str});
// {'0': 'M', '1': 'u', '2': 's', '3': 'h', '4': 'f', '5': 'i', '6': 'q', '7': ' ', '8': 'A', '9': 'r', '10': 'a', '11': 'f' }
console.log(`${str} is spreaded (for array):`, [...str]);
// [ 'M', 'u', 's', 'h', 'f', 'i', 'q', ' ', 'A', 'r', 'a', 'f' ]
}


// 6. (spread with object)
var obj1 = {
    x : 1, y : 2
}
var obj2 = {
    a : 21,
    b : 7
}
console.log({...obj1, ...obj2});  // { x: 1, y: 2, a: 21, b: 7 }
console.log(obj1, obj2);    // { x: 1, y: 2 } { a: 21, b: 7 