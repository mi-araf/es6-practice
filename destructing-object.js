const user = {
    userId: 983,
    userName: 'Tamim',
    age: 39,
    education: {
        versity: "BUET",
        degree: 'Masters',
    },
};
// TODO: take out the "userName" property from the object so that i can use the property else where.

// * destructing way
{   // 1.    
// LHS e obj type variable declare kre, RHS e main object call krsi
const { userName } = user;
const { age } = user;
console.log(userName);  // Tamim
console.log(age);   // 39
}

{   // 2.
const { userId: id } = user;
console.log(id);    // 983
}

{   // 3.
const { education: {degree: degname}} = user;
console.log(degname);   // Masters
}

{   // 4. for default value
const { marraige: {wife: wifeName} = {} } = user;
console.log(wifeName);  // undefined
}

//  tradational way
{   
// var nam = user.name;
// var nam2 = user['name'];
// console.log(nam);   // Tamim
// console.log(nam2);  // Tamim
}

/*  syntax:

1. var { property } = objectName;

2. variable { property: newVaiable } = objectName;

3. var { property: {nestedProperty} } = objectName;
   var { property: {nestedProperty: newVar} } = objectName;

4. default value
*/