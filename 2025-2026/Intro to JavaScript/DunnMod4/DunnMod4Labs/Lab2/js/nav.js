const rootDirectory = "/Lab2/";

document.querySelector('main > aside > nav').innerHTML = `
<h2>Lab 2</h2>
<ul>
    <li><a href="${rootDirectory}index.html">Introduction</a></li>
    <li><a href="${rootDirectory}css-selectors.html">CSS Selectors</a></li>
    <li class="closed">
        <a>Intro to jQuery</a>
        <ul>
            <li><a href="${rootDirectory}jquery/including-jquery.html">Including jQuery</a></li>
            <li><a href="${rootDirectory}jquery/document-ready.html">Document Ready</a></li>
            <li><a href="${rootDirectory}jquery/jquery-function.html">jQuery Function</a></li>
        </ul>
    </li>
    <li><a href="${rootDirectory}basic-jquery.html">Basic jQuery</a></li>
            <li><a href="${rootDirectory}on-method.html">On() Method</a></li>
</ul>
<div class="info">
    <span class="info__name">FirstName LastName</span>
    <span class="info__next-lab"><a href="/Lab3/index.html">Lab 3</a></span>
</div>
`;



const active = document.querySelector(`[href$="${window.location.pathname.split('/').pop()}"]`);

if (active) {
    list = active.closest('ul');
    if(list) {
        active.classList.add('active');
        toggleSection(list, true);
    }
}

const asideWidth = document.querySelector('main > aside').offsetWidth;
document.querySelector('div.content').style.paddingLeft = asideWidth + 'px';

const subNav = document.querySelectorAll('main > aside > nav li > a:has(+ul)');

for (let i = 0; i < subNav.length; i++) {

    subNav[i].addEventListener('click', function (e) {
        e.preventDefault();
        toggleSection(this, false);
    });
}

function toggleSection(sectionNode, init) {
    
    const parentClasslist = sectionNode.parentNode.classList;
    const openToggle = document.querySelector('main > aside > nav .open');
    const hiddenList = sectionNode.parentNode.querySelector('ul');
    parentClasslist.toggle('open');
    parentClasslist.toggle('closed');
    let duration = 400;
    if(init){
        duration = 0;
    }

    if (parentClasslist.contains('open')) {
        hiddenList.animate(
            { height: ['0px', hiddenList.scrollHeight + 'px'] },
            { duration: duration, fill: 'forwards', easing: 'ease-in-out' }
        )
    }


    if (openToggle) {
        const closingList = openToggle.querySelector('ul');
        closingList.animate(
            { height: [closingList.scrollHeight + 'px', '0px'] },
            { duration: duration, fill: 'forwards', easing: 'ease-in-out' }
        )
        openToggle.classList.remove('open');
        openToggle.classList.add('closed')
    }
}
