displayRoll()

function displayArea()
{
    const height = document.getElementById('height').valueAsNumber;
    const width =Number(document.getElementById(width))
    document.getElementById('area-result').textContent = 'Results' + 'Results' + getArea(height,width)
}

function getArea(l,w)
{
    const area = l * w;
    return area;
    //return l*w;
}

function displaySides()
{
    const labelEle = document.getElementById('top-num-label');
    const sliderEle = document.getElementById('top-num');

    labelEle.textContent = 'Sides: '+ sliderEle.value;
}
function displayRoll()
{
    const topNum = Number(document.getElementById('top-num').value);
    const rollResult = Math.floor(Math.random() * (topNum-1))+2;
    document.getElementById('roll-result').textContent = rollResult

}
const storedDate = new Date();
document.getElementById('stored-date').textContent = storedDate.toLocaleDateString();

function displayNext()

{   
    storedDate.setDate(storedDate.getDate()+1);
    document.getElementById('stored-date').textContent = storedDate.toLocaleDateString();
}

function displayPrev()
{
    storedDate.setDate(storedDate.getDate()-1);
    document.getElementById('stored-date').textContent = storedDate.toLocaleDateString();
}