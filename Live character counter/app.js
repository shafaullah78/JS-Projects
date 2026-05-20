

var userInput = document.querySelector('#user')
var result = document.querySelector('#result')

userInput.addEventListener('input', function () {

    var count = userInput.value.length

    if (count > 100) {
        userInput.value = userInput.value.slice(0, 100)
        count = 100
       
        result.style.color = 'red'
    }

    result.innerHTML = count + ' /100'


})