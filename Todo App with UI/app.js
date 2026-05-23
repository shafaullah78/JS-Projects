

var getInput = document.querySelector('#user')
var getBtn = document.querySelector('#btn')
var getList = document.querySelector('#list')



getBtn.addEventListener('click', function () {

    if(getInput.value.trim() === '') {
        return alert('Please enter todo')
    }

    getList.innerHTML += `<li>${getInput.value} <div class = 'li-btn'><button class = 'delItem' onclick = 'delItem(this)'>delete</button> <button class = 'editItem' onclick = 'editItem(this)'>Edit</button></li></div>`

    getInput.value = ''

})



function delItem(e) {

    e.parentNode.parentNode.remove()

}



function delAll() {

    getList.innerHTML = ''

}

var currentItem;

function editItem(e) {

   currentItem = e.parentNode.parentNode.firstChild

    getInput.value = e.parentNode.parentNode.firstChild.textContent.trim()

    document.getElementById('update').style.display = 'inline-block'

}


function updateValue() {

    currentItem.textContent = getInput.value

    getInput.value = ''

    document.getElementById('update').style.display = 'none'

}