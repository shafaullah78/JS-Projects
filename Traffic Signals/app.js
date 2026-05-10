


var getRed = document.getElementById('red')
var getYellow = document.getElementById('yell')
var getGreen = document.getElementById('gree')

var getStatus = document.getElementById('status')

var redBtn = document.getElementById('Rb')
var yellowBtn = document.getElementById('Yb')
var greenBtn = document.getElementById('Gb')


// allOFF wala helper function hain jo prevous light ko off krta hai 

function allOFF() {

    getRed.style.background = 'white'
    getYellow.style.background = 'white'
    getGreen.style.background = 'white'

    redBtn.style.background = 'gray'
    yellowBtn.style.background = 'gray'
    greenBtn.style.background = 'gray'

    
    redBtn.style.color = 'black'
    yellowBtn.style.color = 'black'
    greenBtn.style.color = 'black'

}


function btnRed() {

    allOFF()

    getRed.style.background = 'red'
    getStatus.innerHTML = 'The red signal is ON'

    redBtn.style.background = 'red'
    redBtn.style.color = 'white'


}



function btnYellow() {

    allOFF()

    getYellow.style.background = 'yellow'
    getStatus.innerHTML = 'The yellow signal is ON'

    yellowBtn.style.background = 'yellow'
    yellowBtn.style.color = 'white'


}



function btnGreen() {

    allOFF()

    getGreen.style.background = 'green'
    getStatus.innerHTML = 'The green signal is ON'

    greenBtn.style.background = 'green'
    greenBtn.style.color = 'white'


}

