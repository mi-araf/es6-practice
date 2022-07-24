// To create a class inheritance, use the extends keyword.

// The super() method refers to the parent class.
/* By calling the super() method in the constructor-
method, we call the parent's constructor method and-
gets access to the parent's properties and methods. */

// you can define function body inside 'class' but don't write 'fucntion' keyword

// Inheritance is useful for code reusability: reuse properties and methods of an existing class when you create a new class.

// start ---- example:
class Parent {
    constructor() {
        this.motherName = "Payel";
    }
}
class Child extends Parent{
    constructor(childName) {
        super();    // The super() method refers to the parent class.
        this.name = childName;
    }
    getFullName() {
        return this.name + ' ' + this.motherName;
    }
    getBabyName(babyName) {
        return this.name + ' ' + babyName;
    }
}

const baby = new Child("Keya");
const baby2 = new Child("Tania");
console.log(baby);
console.log(baby2);
console.log(baby.getFullName());
console.log(baby2.getBabyName("Brishty"));


// three major pillars of object-oriented programming:
// 1. encapsulation, 2. inheritance, 3. polymorphism.