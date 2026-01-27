// Hoisting
// -function definitions are moved to the top of the file at runtime
// -this works with named functions, not work anonymous functions
conversation();

// argument is the actual value given to a function
// parameters is a placeholder value defined in a function.

function sayHello(name) {

    // Template literals are adding a js code to a string
    // `` instead of quotes
    // ${} with a js expression inside
    console.log(`Hello ${name}`);
}

function discussDay(dayOfWeek, temp) {
    console.log(`Today is ${dayOfWeek} and everyone in Wisconsin is ${temp}`);
}

function sayGoodbye() {
    console.log('Thanks for the conversation')
    console.log('Goodbye')

}

function conversation() {
    sayHello("Shawn");
    discussDay(getDay(), "cold");
    sayGoodbye();
}
function getDay() {
    // 10/22/2025 England time zone
    // 10-22-2025 American time zone


    // this is from w3 Schools
    // https://www.w3schools.com/jsref/jsref_getday.asp

    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];
    return day
}