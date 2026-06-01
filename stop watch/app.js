


var getDisplay = document.querySelector('#display')

var stopBtn = document.querySelector('#stopBtn')

var startBtn = document.querySelector('#startBtn')

var resetBtn = document.querySelector('#resetBtn')

var seconds = 0

var minitues = 0

var hours = 0

var timer;


startBtn.addEventListener('click', function() {

    if(timer) return;

    timer = setInterval(function() {

        seconds++

        if(seconds === 60) {

            seconds = 0

            minitues++

        }

        if(minitues === 60) {

            minitues = 0

            hours++

        }

        getDisplay.innerHTML = 

        (hours < 10 ? '0' + hours : hours) + ' : ' +
        (minitues < 10 ? '0' + minitues : minitues) + ' : ' +
        (seconds < 10 ? '0' + seconds : seconds); 


    }, 1000)

})


stopBtn.addEventListener('click', function() {

    clearInterval(timer);

    timer = null

})


resetBtn.addEventListener('click', function() {

    clearInterval(timer)

    timer = null

    seconds = 0

    minitues = 0

    hours = 0

    getDisplay.innerHTML = "00 : 00 : 00"
    
})


