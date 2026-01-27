/*
NOTE: EVENT LISTENERS
  -Event listeners are a better alternative for an onclick="functionName()" in the HTML
  -An event listener attaches a function to an event. 
  -Multiple event listeners can be used with multiple functions.
  -Event listeners can listen for a named function or an anonymous function
  -Some problems will have an event listener--these are not required for this lab or this modules assignment
*/





//====PROBLEM ONE====
//This event listener listens for a "click" event and triggers the function "problemOne()" on click
//Note that the event listener references the function name only (no parentheses after)

//EVENT LISTENER SETUP:
//---Get the button:
const problemOneSubmit = document.getElementById('one-test');
const problemTwoSubmit = document.getElementById('two-test');
const problemThreeSubmit = document.getElementById('three-test');
//---Add an event listener to the button:
//Event type: click
//Triggered function: problemOne
problemOneSubmit.addEventListener('click', problemOne);
problemTwoSubmit.addEventListener('click', problemTwo);
problemThreeSubmit.addEventListener('click', problemThree);


//EVENT FUNCTION:
const oneResultEle = document.getElementById('one-result');
const oneInputEle = document.getElementById('one-input');
function problemOne() {

        oneResultEle.innerHTML = '';
        for (let i = 0; i < Number(oneInputEle.value); i++) {
                oneResultEle.textContent += i + 1 + ' ';
        }

}






//====PROBLEM TWO====
const twoResultEle = document.getElementById('two-result');
const twoInputEle = document.getElementById('two-input');
function problemTwo() {

        twoResultEle.innerHTML = '';
        for (let i = 0; i < Number(twoInputEle.value); i++) {
                twoResultEle.textContent += i + 1 + ' ';
        }

}








//====PROBLEM THREE====
const threeResultEle = document.getElementById('three-result');
const lowerThreeInputEle = document.getElementById('three-lower');
const topThreeInputEle = document.getElementById('three-top');
const decrementInput = document.getElementById('three-d');
function problemThree() {
        threeResultEle.innerHTML = '';
        for (let i = Number(topThreeInputEle.value); i >= Number(lowerThreeInputEle.value); i -= Number(decrementInput.value))
        {
                threeResultEle.textContent += i + ' ';
        }
}





