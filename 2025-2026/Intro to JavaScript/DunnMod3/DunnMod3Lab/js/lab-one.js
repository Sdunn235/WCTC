


function oddEven(inputEle)
{
    // const inputEle = document.getElementById('odd-even');

    if (inputEle.valueAsNumber % 2 === 0)
    {   
        //classList is a property that is a part of every HTMLElement object
        // a propert is a variable inside of an object
        // add() is a method that is part of every classList object
        // a method is a function inside of an object
        inputEle.classList.add('green');
        inputEle.classList.remove('red');

    }
    else
    {
        inputEle.classList.add('red');
        inputEle.classList.remove('green');
    }
}


// You can grab elements outside of the function so you only need to get them one time
const textTFInputEle = document.getElementById('text-tf');
const textTFResultsEle =document.getElementById('text-tf-result');

function textTF()
{   
    let outputText = "This is falsy"

    if(textTFInputEle.value)
    {
        outputText = "This is truthy"
    }

    textTFResultsEle.textContent = outputText
}

const numberTFInputEle = document.getElementById('number-tf');
const numberTFResultsEle =document.getElementById('number-tf-result');

function numberTF()
{   
    let numberOutputText = "This is falsy"

    if(Number(numberTFInputEle.value))
    {
        numberOutputText = "This is truthy"
    }

    numberTFResultsEle.textContent = numberOutputText
}

function logicalAnd()
{   // checked is a property that lets us know if a radio or checkbox is checked
    const valueOne = document.getElementById('l-a-v1-true').checked;
    const valueTwo = document.getElementById('l-a-v2-true').checked;

    let output;
    if (valueOne && valueTwo)
    {
        output = `true && true is true`
    }
    else
    {
        output = `${valueOne} && ${valueTwo} is false`
    }

    document.getElementById('l-a-results').textContent = output;
}
function logicalOr()
{   // checked is a property that lets us know if a radio or checkbox is checked
    const valueOne = document.getElementById('l-o-v1-true').checked;
    const valueTwo = document.getElementById('l-o-v2-true').checked;

    let output;
    if (valueOne || valueTwo) 
    {
        output = `${valueOne} || ${valueTwo} is true`
    }
    else
    {
        output = `false || false is false`
    }

    document.getElementById('l-o-results').textContent = output;
}
// The switch is terrible
// it is an if else statement (who needs it?)
const switchTextEle = document.getElementById('switch-output');
const switchModeEle = document.getElementById('switch-mode');
const switchResultsEle = document.getElementById('switch-result');
function switchPractice()
{
    switch (switchModeEle.value)
    {
        case 'alert':
            // if(switchModeEle.value === 'alert') {}
            alert(switchTextEle.value);
            break; //ends the switch
        case 'log':
            // if(switchModeEle.value === 'log') {}
            console.log(switchTextEle.value);
            break; //ends the switch
        
        case 'html':
            // if(switchModeEle.value === 'html') {}
            switchResultsEle.textContent = switchTextEle.value
            break; //ends the switch
        default:
            console.log("you shouldn't be here!")
            break;
        
    }
}
function confirmFunction()
{
    let text;
    if(confirm('Press a button!') === true) 
    {
        text = 'You Pressed OK!';
    }
    else
    {
        text = 'You Canceled!';
    }

    document.getElementById('confirm-results').innerHTML = text;
}
function checkAmOrPm()
{   
    let now = new Date();
    /**
     * Gets the current hour (0-23) from the Date object.
     * Uses the `now` Date object and calls the `getHours()` method,
     * which returns the hour of the day as an integer from 0 (midnight) to 23 (11 PM).
    */
    let hours = now.getHours();
    let am = hours <= 10;
    console.log(hours);
    if( hours = am) {
        document.getElementById('check-am-pm-results').innerHTML = "It's AM"
    }
    else{
        document.getElementById('check-am-pm-results').innerHTML = "It's PM"
    }
}