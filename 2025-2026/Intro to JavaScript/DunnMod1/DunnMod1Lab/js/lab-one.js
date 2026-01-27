// Variables store values
// Functions store code
// properties are variables inside of objects
// methods are functions inside of objects

// Scope is the current context of code { }

// THESE ARE MEMBERS
// Variables in JavaScript
//  1. variable keyword (not the datatype)
//      var - globally (function) scoped variable
//      let - block-scoped variable
//      const - block-scoped constant (doesnt change value) variable
//  2. variable name
//      describe the value in the variable
//      lowerCamelCase
//  3. assignment operator ( = )
//  4. value

// Javascript does not need semicolons



var a = 1;
let b = 2;
const c = 3;

// console object 
//  Built in object that represents your browser dev tools
//  The values in between () are called arguments


console.group("Initial Values");
console.log("a: ", a);
console.log('b: ', b);
console.log('c: ', c);
console.groupEnd();

{
    var a = 4; // This recreates the a variable from before
    let b = 5; // b and c are new variables in this scope
    const c = 6; 

    console.group("Scoped Values");
    console.log("a: ", a);
    console.log('b: ', b); //shadows the outer b (uses the closest scope)
    console.log('c: ', c);
    console.groupEnd();
}

console.group("Initial Values Again");
console.log("a: ", a);
console.log('b: ', b);
console.log('c: ', c);
console.groupEnd();

// Reassign variables
//  changing the value of an existing variable using our assignment operator
a = 7;
b = 8; 
//c = 9;

console.group("Initial Values Reassigned");
console.log("a: ", a);
console.log('b: ', b);
console.log('c: ', c);
console.groupEnd();

a = 'apples';

console.log(c + b + a);
console.log(a + b + c); // implicit conversion

// Concatenation is adding strings together
