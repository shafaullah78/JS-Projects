
var getInput = document.querySelector('#user')

var getBtn = document.querySelector('#btn')

var getList = document.querySelector('#list')

var getDelAll = document.querySelector('#delAll')

getBtn.addEventListener('click', function () {

    getList.innerHTML += `<li>${getInput.value}  <button onclick='delItem(this)'>delete</button></li>`

    getInput.value = ''

})


getDelAll.addEventListener('click', function () {

    getList.innerHTML = ''

})


function delItem(e) {

    e.parentNode.remove()

}


