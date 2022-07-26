const numbers = [1, 2, 3, 4, 6];
const nestedNum = [1, 2, [3, 100, 500], 4, 6];

{
// TODO: assign first element to a, second element to b
var [a, b] = numbers;
console.log(a, b);  // 1 2
}

{
// TODO: assign 2 in x, 6 in y
var [, x, , , y] = numbers;
console.log(x, y);  // 2 6
}

{
// TODO: take 100 & 500 from nested Array
var [, , [, w, e]] = nestedNum;
console.log(w, e);  // 100 500
}


// * TODO: swap two varables
{   // destructing way:
var one = 1;
var two = 2;
[two, one] = [one, two];
console.log(one, two);  // 2 1
}

{   // old way:
let oneA = 1;
let twoB = 2;

let temp = oneA;
oneA = twoB;
twoB = temp;
console.log(oneA, twoB);  // 2 1
}