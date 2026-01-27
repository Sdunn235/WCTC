
$(function(){

    const idTwo = $('#id-two')
    console.log(idTwo)
    //If I wanted to get this as an HTMLElement Object, I need to index
    console.log(idTwo[0])

    console.log($('.practice-class').val())

    console.log($('.practice-class-two:first-of-type'))

    console.log($('practice-class-three:last-of-type'))

    console.log($('practice-class-four:not(.active)'))

    console.log($('practice-class-five:has(em)'))

    console.log(document.querySelectorAll('.practice-class-five:has(em)'))
})