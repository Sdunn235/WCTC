
$(function() {
    $('#my-button').on('click', function(e){
        console.log(this);  //HTMLElement Object
        console.log($(this)); //jQuery Object
    });  
    // on method is essentially an addEventListener
    $('#on-example').on('mouseenter', function(e){
        //this.classList.add('active')
        $(this).addClass('active')
    }).on('mouseleave', function(e){
        $(this).removeClass('active')
    })
    //chaining is the process of stringing multiple methods together (so long as the return types work for us)

});

