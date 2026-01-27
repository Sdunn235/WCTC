$(function () {
    let activeSection = 0;
    //Sets up a click event on the headers and opens the work area associated to it
    $("[id^='exercise-']>h2").on('click', function () {
        $(this).siblings('.work-area-container').slideToggle(500, "swing");
        $(this).toggleClass("selected-exercise");
    });


    // html method
    //  -jquery equivalent of  the .innerHtML property
    //  -use as a get or a set
    //      -get $().html()
    //      -set $().html('html markup')
    console.log($('#html-as-get').html())

    $('#html-as-set').html(`<h4>This has been updated</h4>
                            <p>with an HTML string</p>`)

    $('.html-set-many').html(`
        <h4>One method</h4>
        <p>updates all of these</p>
    `)
    // text() method
    // -jQuery's equivalent to native JavaScript is textContent (.innerText)
    //      -same as a html with getters and setters

    console.log($('#text-as-get').text())

    $('#text-as-set').text('<em>This</em> text has been updated')

    $('#text-to-append > p').text($('#text-to-append > p').text()+'Shawn')

    $('#text-in-a-list  li').text(function(i, text){
        return text + ' easily updated'
    })
    
    
    // $ = jQuery
    console.log(typeof $('#get-val-tex-input').val());
    console.log(typeof $('#get-val-number-input').val());
    console.log(typeof $('#get-val-select').val());

    $('#set-val-text-input').val('update!')

    console.log($('#get-bg-css').css('background-color'));

    $('#set-bg-css').css('background-color', '#D3D3D3');

    $('#add-active').addClass('active');
    $('#remove-off').removeClass('off');

    //Update this value to the current exercise you are on to open it on refresh
    activeSection = 1;
    if (activeSection > 0) {
        $(`#exercise-${activeSection}>h2`).click();
    }

});