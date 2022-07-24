const person = {
    pName: "Tom Hardy",
    motherName: "Sabrina Carpenter",
    age: 17, job: "FaceBooker",
    gfName: "Ema Watson",
    address: "Kochu Tola, Pat Khet 69/C",
    phone: '018028390', 
    friends: ["Tobey Maguire, Andrew Garfeild, Tom Holland"]
}

console.log(person);     // object
// 1)
console.log(person.gfName);
// 2)
const phone = person.phone;
console.log(phone);

/* {property} = object; here the property will be grabed from the object-
 so make sure to give the correct name of property */
// 3)
const {age} = person;
const gfName = person.gfName;
console.log(gfName, age);

// 4)
const {pName, job, motherName} = person;
console.log(pName, motherName, job);


/* Destructuring is a JavaScript expression that allows us to-
extract data from arrays, objects, and maps and set them into-
new, distinct variables. Destructuring allows us to extract-
multiple properties, or items, from an array​ at a time. */

// array destructure
const friends = ["Shakib", "Khan mosha", "Abdullah", "Amir Khan", "Sharukh Shaheb"];
const [chotoFrnd, nextFrnd, ...restFrnds] = friends;
console.log("First Two frnds:", chotoFrnd, nextFrnd);
console.log("Rest frnds in object:", restFrnds);
console.log("Rest frnds:", ...restFrnds);
console.log("All friends:", ...friends);


const complexObject = {
    nam: 'abc',
    info: {
        address: 'kola cha',
        leader: 'dwjo',
    }
}
const {leader} = complexObject.info;
console.log(leader);