// ! Template literals are literals delimited with backtick (`) characters,
/* Template literals allows ---
1. multiline strings
2. both single and double quotes-inside a string 
3. Template literals provide an easy way to interpolate variables and expressions into strings.
    The method is called string interpolation. syntax:  ${...} 
4. variables in strings
5. expressions in strings
6. To escape a backtick in a template literal, put a backslash (\) before the backtick.
    eg.  `\`` === '`' // --> true
*/



const firstName = "Justin";
const lastName = "TimberLake";
const fullName = firstName + ' ' + lastName + ' is a good person.';
const fullName2 = `${firstName} ${lastName} is a good boy.`;
console.log(fullName);
console.log(fullName2);


// interpolation + string template
console.log(`${2+5*2+99-56} is a number. `);

mulLine = `It's like a         preformatted text 
of <pre> tag
        I don't need a new line anymore. 
    ( ^ ) -> its a caret sign. `;
console.log(mulLine);