//Do-While Test One
//Do-while loop that continues with user confirmation
const doWhileResultEle = document.getElementById('do-while-result')
function doWhile() {
    //Use a window.confirm()
    doWhileResultEle.innerHTML = '';
    let i = 0;
    do{
        doWhileResultEle.textContent += (i + 1) + ' ';
        i++;
    } while(confirm('Click "OK to continue'));
}