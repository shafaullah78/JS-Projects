

var display = document.getElementById('count')

var counter = 0

var maximize = document.getElementById('maxBtn')

var minimize = document.getElementById('minBtn')

var reset = document.getElementById('rstBtn')


function updateColor() {

    if (counter > 0) {

        display.style.color = 'green'

    } else if (counter < 0) {

        display.style.color = 'red'

    } else {

        display.style.color = 'white'

    }

}



function updateAction() {

    maximize.style.background = 'aliceblue'

    maximize.style.color = 'black'

    minimize.style.background = 'aliceblue'

    minimize.style.color = 'black'

    reset.style.background = 'aliceblue'

    reset.style.color = 'black'

}


function increase() {

    updateAction()

    counter++

    display.innerHTML = counter

    maximize.style.background = 'green'

    maximize.style.color = 'white'

    updateColor()

}



function decrease() {

    updateAction()

    counter--

    display.innerHTML = counter

    minimize.style.background = 'red'

    minimize.style.color = 'white'

    updateColor()

}



function resetAll() {

    updateAction()

    counter = 0

    display.innerHTML = counter

    reset.style.background = 'orange'

    reset.style.color = 'white'

    updateColor()

}