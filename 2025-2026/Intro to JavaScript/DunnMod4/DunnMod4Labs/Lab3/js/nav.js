const rootDirectory = "/Lab3/";

document.querySelector('main > aside > nav').innerHTML = `
<h2>Lab 3</h2>
<ul>
    <li><a href="${rootDirectory}index.html">Introduction</a></li>
    <li><a href="${rootDirectory}tab-form.html">Tab Form</a></li>
    <li><a href="${rootDirectory}conditional-ui.html">Conditional UI</a></li>
    <li><a href="${rootDirectory}family-methods.html">Extra: Family Methods</a></li>
</ul>
<div class="info">
    <span class="info__name">FirstName LastName</span>
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
