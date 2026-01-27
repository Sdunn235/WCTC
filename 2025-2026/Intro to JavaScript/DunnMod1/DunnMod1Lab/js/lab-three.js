
// Lets Grab the elements we need here so we dont get them
// every time we call the function

const aElement = document.getElementById('value-a');
const bElement = document.getElementById('value-b');
const cElement = document.getElementById('value-c');


function expressions()
{   
    const a = Number (aElement.value);
    const b = bElement.valueAsNumber; // If the input is a type number
    const c = +cElement.value;

    // An expression is anything that resolves to a single value
    // Order of operations: PEMDAS
    // () are our grouping operator

    // abc
    console.log("abc: ", a * b * c);

    // ab - c
    console.log('ab-c: ', a*b-c);

    // a(b - c)
    console.log("a(b-c): ", a * (b-c));

    // a divided by b plus c
    console.log("a/b + c: ", a/b + c );

    // a divided by the sum of b and c
    console.log("a/(b+c): ", a/(b+c));

    // a + b^c
    console.log("a+b^c: ", a+b**c);

    // (a + b)^c
    console.log("(a+b)^c: ", (a+b)**c);

    // 50% of abc
    console.log("50% of abc: ", (a*b*c)*.5);

    // 50% of 10% of abc (Note the error in precision)
    console.log("50% of 10% of abc:", ((a*b*c)*.1)*.5);

    // Sum of a and b divided by the sum of b and c
    console.log("(a+b)/(b+c): ", (a+b)/(b+c));

    // (abc)^2 + (abc)^2
    console.log("(abc)^2 + (abc)^2: ", ((a*b*c)**2)+((a*b*c)**2));

    // ((abc)^2 + (abc)^2) / (abc)^2
    console.log("((abc)^2 + (abc)^2) / (abc)^2: ", (((a*b*c)**2)+((a*b*c)**2))/((a*b*c)**2));

    // 'Hello' + 'to you'
    console.log("'Hello' + 'to you': ",'Hello' + 'to you');

    // a * 'Hello'
    console.log("a * 'Hello': ", a * 'Hello');


    aElement.value = '';
    bElement.value = '';
    cElement.value = '';
}