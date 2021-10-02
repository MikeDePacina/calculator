const field = document.getElementByClassName('container')
Array.from(document.getElementByClassName('container'))
field.forEach(element => {
    addEventListener('click', display())
});

function display(){
    const output = document.getElementById('field')
    output.innerHTML = 1
}