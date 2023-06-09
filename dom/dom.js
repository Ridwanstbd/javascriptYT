const btn = document.querySelector('.btn')
const body = document.body
const newText = document.createElement('p')
newText.textContent = "Ridwan Setio Budi"

function munculText(){
    newText.style.fontSize = '30px'
    body.append(newText)
}
function gantiwarnaText(){
    newText.style.color = 'red'
    body.append(newText)
}