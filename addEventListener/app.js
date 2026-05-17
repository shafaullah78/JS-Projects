
var yellowBtn = document.querySelector('#yellow')
var redBtn = document.querySelector('#red')
var greenBtn = document.querySelector('#green')
var blueBtn = document.querySelector('#blue')
var pinkBtn = document.querySelector('#pink')
var grayBtn = document.querySelector('#gray')

var body = document.querySelector('body')

yellowBtn.addEventListener('click', function () {

    body.style.background = 'yellow'

})


redBtn.addEventListener('click', function () {

    body.style.background = 'red'

})


greenBtn.addEventListener('click', function () {

    body.style.background = 'green'

})



blueBtn.addEventListener('click', function () {

    body.style.background = 'blue'

})



pinkBtn.addEventListener('click', function () {

    body.style.background = 'pink'

})



grayBtn.addEventListener('click', function () {

    body.style.background = 'gray'

})