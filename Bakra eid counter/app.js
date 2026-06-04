
var getTimer = document.querySelector('#timer')

function countDown() {

    var bakraEid = new Date('may 27, 2026')

    var today = new Date()

    var diff = bakraEid - today

    // time calculations

    var days = Math.floor(diff / (1000 * 60 * 60 * 24))

    var hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))

    var minutes = Math.floor(diff % (1000 * 60 * 60) / (1000 * 60))

    var seconds = Math.floor(diff % (1000 * 60) / (1000))


    if (diff < 0) {

        clearInterval(timer)
        getTimer.innerHTML = 'Bakra Eid Mobarak ho'
        return
    }


    if (days < 10) {

        days = '0' + days

    }


    if (hours < 10) {

        hours = '0' + hours

    }


    if (minutes < 10) {

        minutes = '0' + minutes

    }


    if (seconds < 10) {

        seconds = '0' + seconds

    }


    getTimer.innerHTML = `${days} days ${hours} hours ${minutes} min ${seconds} sec Remaining`


}


var timer = setInterval(countDown, 1000)