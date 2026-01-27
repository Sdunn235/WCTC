

// jQuery and $ are the same thing
// -$ is the JQuery oject (it holds everything we need)
console.log(jQuery)
console.log($)

//$() is the JQuery function
// - this is how we use jQuery (as a function)
// - based on the argument data types we give it, it acts differently
//      -annonymou function ---> document read function
//      -string ---> basically a querySelectorAll that returns jQuery object
//      -array ---> convert the array to a jQuery object

// To use jQuery, we need to have a document ready function

$(function() {
    // We have on document ready function per page
    // All of our code goes inside of it

    $('.active')
    console.log($('article .active'))

    $('.article .active' ).removeClass('active')



})
