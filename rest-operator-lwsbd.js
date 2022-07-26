// rest operator
// ! spread operator used in call/log/function calling
// ! rest operator is used in function parameter

// '...para' rest operator should be single
// '...para' -> can't be placed first (if any parameter is present it's before)

// 1
function myFun() {
    console.log(arguments);
}
myFun(5, 6, 7, 8, 9);   // [Arguments] { '0': 5, '1': 6, '2': 7, '3': 8, '4': 9 }

// 2
function myFunRest(...para) {
    console.log(para);
}
myFunRest(5, 6, 7, 8, 9);  // [ 5, 6, 7, 8, 9 ] 

// 3
function myFunA(a, ...para) {
    console.log(a, para);
}
myFunA(65, 34, 73, 82, 29);  // 65 [ 34, 73, 82, 29 ]
/* here; a represents the first index, so took '65' as first
 parameter & then assign '65' to the parameter 'a' & 
 ...rest operator did it's left work */

//  * wrong => function myFunA(...para, a)
//  * wrong => function myFunA(a, ...para, ...abcd)