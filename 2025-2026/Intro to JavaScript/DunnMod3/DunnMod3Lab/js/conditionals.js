// Boolean
// - true or false, 0 or 1, on or off
// - literal value for booleans: true false
// - truthy and falsy value (these act like true or false)

// Conditional Operators
// - Whenever you see one of these, the result of the expression is a boolean
// 1. Comparison Operators
//  - compares two values
//  - < less than
//  - > greater than
//  - <= less than or equal to
//  - >= greater than or equal to
//  - == equal to 
//  - != not equal to
//  - === strict equal to   (compares datatypes and values)
//  - !== strict not equal to (compares datatypes and values
// 2. Logical Operators
//  - operate on conditional expressions
//  && logical and
//    - a && b
//    - for this to be true both a and b must be true 
//  || logical or
//    - for this to be true, only a or b must be true (both can be true)
//  ! logical not
//    - !a
//    - do the opposite of a
// Conditional Expression
// - resolves to a value of true or false

// Conditional Statements
// if statement
//  - evaluates a conditional expression and if is true,
//      continues into the body of the if statement
//  - every time we have an if statement, we are creating a decision tree
// else if statement
//  - evaluates an additional condition expression
//  - this only happens if the previous statement were false
//  - you can have as many of these as you want ( the need to follow the if)
// else statement
//  - no conditional expression that is evaluated
//  - this runs if all other conditions in the tree were false
//  - they must follow an if (or an else if)
//  - optional

if (true) //true is a literal value, also a condition, the () is are grouping operator
{
    console.log("this is the body and it runs because the condition");
}

if (false)
{
    console.log("this never runs because the condition is false");
}
else
{
    console.log("since the if condition is false, the ");
}


if (false)
{
    console.log(1);
}
else if (false)
{
    console.log(2);
}
else if (false)
{
    console.log(3);
}
else (true)
{
    console.log(4);
}

// There is an OOP with logic operators
// 1. ! logical not
// 2. && Logical and
// 3. || logical or


console.log(4 > 5 && true);
console.log(true && false || true);
console.log(true || false && true);
console.log(false || true && false);

