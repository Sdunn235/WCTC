document.getElementById('listenerExampleButton').addEventListener('click', myButtonClick);

function myButtonClick() {
    alert('Using an event listener');
}



$(document).ready(function(){
    $('#jQueryExampleButton').click(function(){alert('Using jQuery')});            
});