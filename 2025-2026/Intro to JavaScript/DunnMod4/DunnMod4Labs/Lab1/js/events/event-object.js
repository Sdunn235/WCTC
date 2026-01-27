document.getElementById('event-object-test').addEventListener('click', function (e) {
    //e is the event object. It is the first parameter of the event listener function. 
    //You could call it anything you want, but e is the typical naming convention.
    
    //alert the target, type, and time.
    alert(`Button Click:
    Target: ${e.target}
    Type:   ${e.type}
    Time:   ${e.timeStamp}
    `);
});




document.getElementById('click-me').addEventListener('click', function(e) {
    //e stands for event
    // console.log(e.target) // target is a property that holds an HTMLElement Object
    if (e.target.nodeName.toLowerCase() === 'button')
    {
        console.log(this)
        this.rest(); //this is the HTMLElement we are working on
});


document.getElementById('email-form').addEventListener('submit', function(e) {
    e.preventDefault(); // A Lot of times, this will be our first line
})