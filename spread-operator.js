/* The JavaScript "spread operator" (...) allows us to-
quickly copy all or part of an existing array or object-
into another array or object. */


const age = [12, 14, 19, 13, 16];
const age2 = [15, 29, 34, 11];
const age3 = [33, 2, 45, 9, 12];

const allAge = age.concat(age2).concat(age3);
console.log(allAge);

const allAge2 = [age, age2, age3];
console.log(allAge2);

// concatinate with spread operator (...)
const allAge3 = [...age, ...age2, 7, ...age3];
console.log(allAge3);

/* Spread syntax can be used when all elements from an-
object or array need to be included in a new array or-
object, or should be applied one-by-one in a function-
call's arguments list. There are three distinct places-
that accept the spread syntax:

Function arguments list (myFunction(a, ...iterableObj, b))
Array literals ([1, ...iterableObj, '4', 'five', 6])
Object literals ({ ...obj, key: 'value' }) */


// * Array Max with spread operator
const buiseness = 650;
const minister = 450;
const sochib = 950;
const takaPoisha = [650, 210, 550, 850];
const maximum = Math.max(buiseness, minister, sochib, ...takaPoisha);
console.log("Max is:", maximum);


const taka = [650, 450, 250, 850];
const takaMax = Math.max(...taka);
console.log("Maxium of taka Array is:", takaMax);