const hubby = "Elias Kanchon";
// hubby = "Omar Sunny";      // TypeError: Assignment to constant variable.
console.log(hubby);


// in 'const' array, you can't change the array (eg. number -> string)
const numbers = [12, 45];
numbers[1] = 88;
numbers.push(24);
console.log(numbers);


// properties/value can be updated but variable name can't be replaceable
const nayok = {name: "Sakib Khan", phone: 86217};


// can be changed
let patientName = "Abdur Rahim";
patientName = "Fahima Khala";
console.log(patientName);


// sum variable is in global scope, if it was in a fixed
// then it can't be accessd
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i;
    console.log(i);
    console.log("now the value of i:", i);
}
// 'let i' -> this term is only in the for loop scope, to
// make it global/full free accessible use var instead of let
console.log("now the value of sum:", sum);