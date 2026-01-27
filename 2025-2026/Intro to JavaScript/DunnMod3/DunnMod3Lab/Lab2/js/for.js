//For Test One
//For loop with a counter and hardcoded test expression

for (let i = 0; i < 10; i++)
{
    document.getElementById('for-one-result').textContent += i + ' ';
}

//You can clear out an element by doing: element.innerHTML = '';


//For Test Two
//For loop with a counter and variable in the test expression
const twoResultEle = document.getElementById('for-two-result');
const twoInputEle = document.getElementById('for-two');
function forTwo() {
    twoResultEle.innerHTML = '';
    for (let i = 0; i < Number(twoInputEle.value); i++ )
    {
        twoResultEle.textContent += i + 1 + ' ';
    }
    twoInputEle.value = '';
}


//For Test Three 
//For loop with a two variables in the test expression
const threeResultEle = document.getElementById('for-three-result');
const baseThreeInputEle = document.getElementById('for-three-base');
const topThreeInputEle = document.getElementById('for-three-top');
function forThree() {

    threeResultEle.innerHTML = '';
    for (let i = Number(baseThreeInputEle.value); i < Number(topThreeInputEle.value); i++ )
    {
        threeResultEle.textContent += i + 1 + ' ';
    }
    baseThreeInputEle.value = '';
    topThreeInputEle.value = '';
 }
//For Test Four
//For loop with a variable for the incrementor
const fourResultEle = document.getElementById('for-four-result');
const baseFourInputEle = document.getElementById('for-four-base');
const topFourInputEle = document.getElementById('for-four-top');
const incrementInput = document.getElementById('for-four-i');
function forFour() {
    let i = 0;
    fourResultEle.innerHTML = '';
    for (let i = Number(baseFourInputEle.value); i < Number(topFourInputEle.value); i += Number(incrementInput.value))
    {
        fourResultEle.textContent += i + Number(incrementInput.value) + ' ';
    }
    baseFourInputEle.value = '';
    topFourInputEle.value = '';
    incrementInput.value = '';

}


//Objects and Array used for testing:
function Person(name, age) {
    this.name = name;
    this.age = age;
}

let people = [
    new Person('Cindy', 14),
    new Person('John', 25),
    new Person('Shandy', 36),
    new Person('Raul', 47),
    new Person('Hannes', 58),
    new Person('Sonam', 70)
]

//the length property can be used to get the number of items in an array
console.log(people.length);
function createElementFromPerson(person)
{
    // MEMBERS:
    // -property =variable inside of an object
    // -method = function inside of an object
    const personEle = document.createElement('div');
    personEle.innerHTML = `<h4>${person.name}<h4> | ${person.age}<h4>`
    return personEle;
}


//For Test Five
//Looping through an array
const fiveResultEle = document.getElementById('for-five-result')
function forFive() {
    for(let i = 0; i < people.length; i++ )
    {
        fiveResultEle.append(createElementFromPerson(people[i]));
    }
}


//For Test Six 
//Looping through an array with a condition
const sixResultEle = document.getElementById('for-six-result');
const sixAgeEle = document.getElementById('for-six-age');
// const baseAge = document.getElementById('for-six-age').valueAsNumber;
function forSix() {
    sixResultEle.innerHTML = '';
    for(let i = 0; i < people.length; i++)
    {
        const person = people[i];
        if (person.age >= sixAgeEle.valueAsNumber) // Filtering each person based on this function
        {
            sixResultEle.append(createElementFromPerson(person))
        }
    }
    sixAgeEle.value = ''
}