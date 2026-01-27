


console.log(document.getElementById('select-me') )

// querrySelector will take any css selector
// - you do need css markup (ie # . )
// -anytime a method says getByx you dont need css markup
console.log(document.querySelector('.log-me')) // returns an HTMLElement


console.log(document.querySelectorAll('.log-me-again')) // returns a NodeList
// NodeList is essentialy  a HTMLElement array
