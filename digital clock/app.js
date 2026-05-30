
var clock = document.querySelector('#clock')


function showTime() {

    var time = new Date()

    var hours = time.getHours()

    var min = time.getMinutes()

    var sec = time.getSeconds()

    var session = 'AM'

    if(hours >= 12) {

        session = 'PM'

    }

    if(hours > 12) {

        hours = hours - 12

    }

    if(hours == 0) {

        hours = 12

    }

    if(hours < 10) {

        hours = '0' + hours

    }

    if(min < 10) {

        min = '0' + min

    }

    if(sec < 10) {

        sec = '0' + sec

    }

    clock.innerHTML = hours + ':' + min + ':' + sec + ' ' + session

}

 setInterval(showTime, 1000)
