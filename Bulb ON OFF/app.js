

var getImage = document.getElementById('img')

var getStatus = document.getElementById('status')

var isOn = false;

var button = document.getElementById('btn')

function onOFF() {

    if (isOn == false) {

        getImage.src = './images/ONN-Bulb.png'

        getStatus.innerText = 'Bulb is ON'

        button.innerText = 'OFF'

        button.style.background = 'red'
        button.style.color = 'white'

        isOn = true;

    }
    else {

        getImage.src = './images/OFF-Bulb.png'

        getStatus.innerText = 'Bulb is OFF'

        button.innerText = 'ON'

        button.style.background = 'green'
       
        button.style.color = 'white'

        isOn = false

    }
}
