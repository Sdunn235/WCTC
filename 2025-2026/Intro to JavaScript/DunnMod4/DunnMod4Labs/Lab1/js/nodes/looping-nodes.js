
const elementsToActivate = document.querySelectorAll('.activate-this')
{
    console.log(elementsToActivate)
}

// For loops generally work best when working with collections
for(let i = 0; i < elementsToActivate.length; i++)
{   
    //elementToActivate is an array(NodeList)
    //elementsToActive[i] is an HTMLElement Object
    elementsToActivate[i].classList.add('active')
}