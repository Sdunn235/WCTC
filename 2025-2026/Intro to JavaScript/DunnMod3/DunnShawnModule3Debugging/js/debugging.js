//Problem One
function debugTestOne() {
    //Getting the result element and clearing out the text content right away
    const oneResultEle = document.getElementById('debug-one-result');
    oneResultEle.textContent = '';

    //getting the input value
    const oneInputVal = Number(document.getElementById('debug-one-input').value);

    //updating the result to be the input value
    for (let i = 1; i <= oneInputVal; i++) {
        oneResultEle.textContent += i + ' ';
    }
}



//Problem Two
function debugTestTwo() {
    //Getting the result element and clearing out the text content right away
    const twoResultEle = document.getElementById('debug-two-result');
    twoResultEle.textContent = '';

    //getting the input value
    const twoInputVal = Number(document.getElementById('debug-two-input').value);

    //updating the result to be the input value
    for (let i = 1; i <= twoInputVal; i++) {
        twoResultEle.textContent += i + ' ';
    }
}




//Problem Three
function debugTestTree() {

    //getting the input value
    const threeInputVal = document.getElementById('debug-three-input').value;
    const threeResultEle = document.getElementById('debugResultThree');
    threeResultEle.textContent = '';
    alert(threeInputVal);
    threeResultEle.textContent = 'You used an alert';

}



//Problem Four

const fourInputValCheck = Number(document.getElementById('debug-four-input-check').value);
const fourInputValOne = Number(document.getElementById('debug-four-input-one').value);
const fourInputValTwo = Number(document.getElementById('debug-four-input-two').value);
function debugTestFour() {
    //Get the result element and clear out the text content right away 
    const fourResultEle = document.getElementById('debug-four-result');
    fourResultEle.textContent = '';

    //Display the results of the inputs to the result element
    if (fourInputValCheck > fourInputValOne && fourInputValCheck < fourInputValTwo) {
        fourResultEle.textContent = `${fourInputValCheck} is between ${fourInputValOne} and ${fourInputValTwo}`;
    } else {
        fourResultEle.textContent = `${fourInputValCheck} is NOT between ${fourInputValOne} and ${fourInputValTwo}`;
    }

}


//Problem Five
function debugTestFive() {
    debugger
    //Get the result element and clear out the text content right away 
    const fiveResultEle = document.getElementById('debug-five-result');

    //Get the input values 
    const fiveInputVal = Number(document.getElementById('debug-five-input').value);

    //Loop by the increment and output the results
    fiveResultEle.textContent = '';
    for (let currentNumber = 1; (currentNumber + fiveInputVal) < 50; currentNumber += fiveInputVal) {
        fiveResultEle.textContent += currentNumber + fiveInputVal + ' ';
    }

}

//Object constructor for creating boat objects
function Boat(name, captain, hullLength) {
    this.name = name;
    this.captain = captain;
    this.hullLength = hullLength;
    this.createParagraphOutput = function () {
        const boatParagraph = document.createElement('p');
        boatParagraph.innerText = 'Boat: ' + this.name + ' | Captained by: ' + this.captain + ' | Length: ' + this.hullLength;
        return boatParagraph;
    }
}

//An array of Boat objects for pirate ships
const pirateShips = [
    new Boat("Queen Anne's Revenge", 'Edward Teach', 103),
    new Boat('Whydah Gally', 'Samuel Bellamy', 110),
    new Boat('Adventure Galley', 'William Kidd', 124),
    new Boat('Golden Hind', 'Francis Drake', 120)
]

//An array of Boat objects for cruise ships
const cruiseShips = [
    new Boat('Celebrity Beyond', 'Kate McCue', 1071),
    new Boat('Oasis of the Seas', 'Thore Thorolvsen', 1181),
    new Boat('Norwegian Encore', 'Niklas Persson', 1094),
    new Boat('Royal Princess', 'Tony Draper', 1083)
]


//Problem Six
function debugTestSix() {
    //Get the result element and empty out the HTML because we add elements to it
    let sixResultEle = document.getElementById('debug-six-result');
    const boatLength = Number(document.getElementById('debug-six-input').value);
    sixResultEle.innerHTML = '';



    //Loop through the pirate ships
    for (let currentPirateShipIndex = 0; currentPirateShipIndex < pirateShips.length; currentPirateShipIndex++) {
        if (pirateShips[currentPirateShipIndex].hullLength > boatLength) {
            sixResultEle.appendChild(pirateShips[currentPirateShipIndex].createParagraphOutput());
        }
    }

    //Loop through the cruise ships
    for (let currentCruiseShipIndex = 0; currentCruiseShipIndex < cruiseShips.length; currentCruiseShipIndex++) {
        if (cruiseShips[currentCruiseShipIndex].hullLength > boatLength) {
            sixResultEle.appendChild(cruiseShips[currentCruiseShipIndex].createParagraphOutput());
        }
    }
}
