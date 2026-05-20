

var getInput = document.querySelector('#user')
var getBtn = document.querySelector('#btn')
var getList = document.querySelector('#list')



getBtn.addEventListener('click', function () {

    getList.innerHTML += `<li>${getInput.value} <button onclick = 'delItem(this)'>delete</button> <button onclick = 'editItem(this)'>Edit</button></li>`

    getInput.value = ''

})



function delItem(e) {

    e.parentNode.remove()

}



function delAll() {

    getList.innerHTML = ''

}

var currentItem;

function editItem(e) {

   currentItem = e.parentNode.firstChild

    getInput.value = e.parentNode.firstChild.textContent

    document.getElementById('update').style.display = 'inline-block'

}


function updateValue() {

    currentItem.textContent = getInput.value

    getInput.value = ''

    document.getElementById('update').style.display = 'none'

}