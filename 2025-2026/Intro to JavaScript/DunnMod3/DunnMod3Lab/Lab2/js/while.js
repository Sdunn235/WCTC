//While Test One
//While loop that continues with user confirmation
const whileOneResultEle = document.getElementById('while-one-result')
function whileOne() {
    //Use a window.confirm(). Look at the documentation for parameters and return value.
    whileOneResultEle.innerHTML = ''
    let i = 0;
    while(confirm('Click "OK" to continue'))
    {
        whileOneResultEle.textContent += (i + 1) + ' ';
        i++;
    }
}

//While Test Two
//While loop that counts to a value
const whileTwoResultEle = document.getElementById('while-two-result')
function whileTwo() {
    whileTwoResultEle.innerHTML = ''
    let i = 0;
    let whileTwoInput = document.getElementById('while-two-count').value;
    while (i < whileTwoInput)
    {   
        whileTwoResultEle.textContent = (i + 1) +  ' ';
        i++;
        console.log(i);
    }
}

