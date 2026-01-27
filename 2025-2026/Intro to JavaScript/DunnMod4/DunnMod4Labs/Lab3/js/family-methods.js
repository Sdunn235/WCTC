$(function () {

    $('#parent').on('click', function (e) {
        const activeElement = document.querySelector('#family-nest .active');
        activeElement.parentElement.classList.add('active');
        activeElement.classList.remove('active');
    })

})