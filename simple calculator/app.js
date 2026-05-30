
var input1 = document.getElementById('number1')

var input2 = document.getElementById('number2')


function add() {

    var addition = Number(input1.value) + Number(input2.value)

    document.getElementById('res').value = addition

    document.getElementById('number1').value = ''

    document.getElementById('number2').value = ''

}


function sub() {

    var subtract = input1.value - input2.value

    document.getElementById('res').value = subtract

    document.getElementById('number1').value = ''

    document.getElementById('number2').value = ''

}


function mul() {

    var multiplication = input1.value * input2.value

    document.getElementById('res').value = multiplication

    document.getElementById('number1').value = ''

    document.getElementById('number2').value = ''

}


function divid() {

    var divide = input1.value / input2.value

    document.getElementById('res').value = (divide).toFixed(2)

    document.getElementById('number1').value = ''

    document.getElementById('number2').value = ''

}