//=====HTML Event Handler Attributes=====
function htmlAttrEvent() {
    alert("HTML Attribute Event");
}



//=====Traditional DOM Event Handlers=====
function domEvent() {
    alert("DOM Event");
}

const domEventButton = document.getElementById('dom-handler-test');
//Add the DOM Event Handler Here:
domEventButton.onclick = domEvent




//=====Event Listeners=====
const eventListenerButton = document.getElementById('event-listener-test');

// .addEventListener Method (part of every HTMLElement Object)
//  -Arguments
//      1. type of event aas a string 'click' 'change' 'hover'
//      2. callback function (what runs when the event triggers)
// eventListenerButton.addEventListener('click', addEventListenerFunction)

// function addEventListenerFunction ()
// {
//     alert('This is an event listener')
// }

eventListenerButton.addEventListener('click', function(){
    alert('this is an event listener')
})
