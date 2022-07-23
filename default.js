/*  In JavaScript(es6), default function parameters allow you-
to initialize named parameters with default values if no-
values or undefined are passed into the function. */

/* Default function parameters allow named parameters to be-
initialized with default values if no value or undefined is passed. */


// 1 (old method) if second parameter is absent 
function add(num1, num2) {
    if (num2 == undefined) {       // (num2 == '') -> NaN
        num2 = 0;
    }
    return num1 + num2;
}

const total = add(15);
console.log(total);


// 1.2 (creative method) if second parameter is absent (same code with OR)
function add2(num1, num2) {
    num2 = num2 || 0;
    return num1 + num2;
}

const total2 = add2(7);
console.log(total2);


// 1.3 (lazy & ES6 method -- 'default parameters') if second parameter is absent, the use default value
function add3(num1, num2 = 0) {
// if user doesn't pass a/next parameter, then this es6 feature of assigning a parameter as its default valuw eill work highly
    return num1 + num2;
}

const total3 = add2(69);
console.log(total3);