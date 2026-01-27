// IPO Chart
//  Inputs
//  Processes
//  Outputs

console.groupCollapsed("IPO");

    console.groupCollapsed("Input");
        console.log("value one box");
        console.log("value two box");
        console.log("submit button");
    console.groupEnd();
    console.groupCollapsed("Processes");
        console.log("do arithmetic on the two values");
        console.log("convert the inputs to numbers");
        console.log("count how many times we click the button");
    console.groupEnd();
    console.groupCollapsed("Outputs");
        console.log('the caluclated values')
    console.groupEnd();

console.groupEnd();


// functions 
//  1. function keyword
//  2. function name (lowerCamelCase)
//  3. () parameters    variables that can be used in the function scope
//  4. { } define the code for the function
//      -you can have a return statement
let numOfClicks = 1;

function calculate()
{
    // DOM (Document Object Model)
    //  -document
    //  -object representation of your html page
    const valueOneElement = document.getElementById("value-one");
    // valueOneElement is an HTMLElement Object

    
    // null is an intentional value of nothing
    // undefined is an unintentional value of nothing

    // an expression is anything that resolves to a single value
    const valueTwo = document.getElementById("value-two").value;
    // valueTwo is a string

    //Number Constructor
    //  Number() --> number
    const valueOneNum = Number(valueOneElement.value);
    const valueTwoNum = Number(valueTwo);

    // .value is a property for inputs
    // .textContent is a value for elements with opening and closing tags

    // these properties can be used as getters or setters
    //  .textContent gets the text
    //  .textContent = "something"    sets the text


    const sumEle = document.getElementById('sum');
    sumEle.textContent = 'Sum: ' + (valueOneNum + valueTwoNum);


    const difEle = document.getElementById('dif');
    difEle.textContent = 'Difference: ' + (valueOneNum - valueTwoNum);
   
    document.getElementById('prod').textContent = 'Product: ' + (valueOneNum * valueTwoNum)
    document.getElementById('quot').textContent = 'Quotient: ' + (valueOneNum / valueTwoNum)
    document.getElementById('mod').textContent = 'Remainder: ' + (valueOneNum % valueTwoNum)



    document.getElementById('clicks').textContent = 'Total Clicks: ' + numOfClicks++;

    document.getElementById('value-one').value = '';
    document.getElementById('value-two').value = '';

}





