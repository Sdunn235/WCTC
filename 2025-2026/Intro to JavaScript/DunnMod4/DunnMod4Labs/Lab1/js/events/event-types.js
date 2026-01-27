window.addEventListener('load', function(e) {
    console.log(e.timeStamp)
})


const fAndBElement = document.getElementById('focus-and-blur')

fAndBElement.addEventListener('focus', function(e) {
    this.classList.add('active')
})

fAndBElement.addEventListener('blur', function(e) {
    this.classList.remove('active')
})

const mouseXYInput = document.getElementById('mouse-xy')

window.addEventListener('mousemove', function(e) {
    mouseXYInput.value = `(${e.x}, ${e.y})`
})