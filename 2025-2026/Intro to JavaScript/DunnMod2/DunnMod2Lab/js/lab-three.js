

// Constructor Notation to create objects
// -Named functions (UpperCamelCase / PascalCase)

// MEMBERS ARE EITHER PROPERTIES OR METHODS
// - PROPERTIES ARE VARIABLES INSIDE OF OBJECTS
// - METHODS ARE FUNCTIONS INSIDE OF OBJECTS
function VideoGameConsole() {

    // this refers to the instance of the "class" (object)
    this.name = "Atari"

    // anonymous function
    this.getInfo = function () {
        console.log(`The name of the console is ${this.name}`);
    }
}

// To create an instance of a "class" (object) we use new keyword
const firstConsole = new VideoGameConsole()

firstConsole.name = "Sega";
// In JavaScript you can add a property to an object on the fly
firstConsole.releaseYear = 1983;
const secondConsole = new VideoGameConsole();
secondConsole.name = "NES"

firstConsole.getInfo();
secondConsole.getInfo();


function VideoGame(name, gamingConsole, rating) {
    this.name = name;
    this.gamingConsole = gamingConsole;
    this.rating = rating;
    this.getInfo = function () // anonymous function
    {
        console.log(`${this.name} | ${this.gamingConsole} | ${this.rating}`);

    }

}
const shawnsFavorite = new VideoGame('FFVII', 'Playstation', 'T');

shawnsFavorite.name = 'MGS3'
shawnsFavorite.rating = 'M'
shawnsFavorite.getInfo();



// Class notation
// - Syntactic sugar for constructor functions
class Pet {
    constructor(name, birthdate) {
        //this refers to the current instance of the "class" (object)
        this.name = name;
        this.birthdate = birthdate;
    }

    alertInfo() {
        alert(`The pet's name is ${this.name}`)
        console.log(this)
    }
}

// const myPet = new Pet('Ace', new Date(2011, 0, 1));

// console.log(myPet);

const pets = []; // This is an Array. Arrays are more like lists in C#

function addPet() {
    const name = document.getElementById('pet-name').value;
    const birthdate = new Date(document.getElementById('pet-bdate').value).toLocaleDateString('en-US');

    const petToAdd = new Pet(name, birthdate);
    pets.push(petToAdd)
    console.log(pets)

    const petsEle = document.getElementById('pets');
    
    const newPetEle = document.createElement('div')      
    newPetEle.classList.add('pet');

    // .onclick is a DOM event (not an HTML Attribute)
    newPetEle.onclick = function()
    {   
        // "wrapping a function call"
        // it forces "this" to be the pet object instead of the HTMLElement Object
        petToAdd.alertInfo();
    }
                         
    // An HTML string is a string that has HTML markup                             
    newPetEle.innerHTML = `
    
    <h3>${petToAdd.name}</h3>
    <em>${petToAdd.birthdate}</em>
    
    `;

    petsEle.append(newPetEle);                                  
    document.getElementById('pet-form').reset();
}

// For next time
// 1. Click event
// 2. Resetting the Form