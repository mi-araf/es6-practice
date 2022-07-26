//  Function default parameter value
function myFun(x = 10) {
    return x;
}
console.log(myFun());       // 10
console.log(myFun(undefined));  // 10
console.log(myFun(null));   // null