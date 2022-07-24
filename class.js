// * JavaScript Classes are templates for JavaScript Objects.
// * A JavaScript class is not an object.
// * If you do not define a constructor method, JavaScript will add an empty constructor method.

// Use the keyword 'class' to create a class.
// Always add a method named - constructor():
// Add 'this' keyword [this.property = value;]

// ! Syntax:--
/*  
class ClassName {
    constructor() {
        this.property = value;
        this.property2 = value2;
        this.property3 = value3;
    }
}
// use 'new' to call the class
*/

class Student {
    constructor(stdId, stdname) {
        this.id = stdId;
        this.name = stdname;
        this.school = "ABC High School"
    }
}

const student1 = new Student(7, "DevIlla");
const student2 = new Student(19, "Maliha");
const student3 = new Student(21, "Sabrina");
console.log(student1, student2);
// access each property's value
console.log(student3.name, student2.id, student1.school);

/* Same struct, same amount of property diye onekgulo-
object create kra jabe. */