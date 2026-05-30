
var getInputPassword = document.querySelector('#password')

var copyBtn = document.querySelector('#copyBtn')

var upperCase = document.querySelector('#upper')

var lowerCase = document.querySelector('#lower')

var numbers = document.querySelector('#numbers')

var symbols = document.querySelector('#symbols')

var generateBtn = document.querySelector('#generateBtn')

var upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var lowerChars = "abcdefghijklmnopqrstuvwxyz"

var numbersChars = "0123456789"

var symbolsChars = "!@#$%^&*()_+"


generateBtn.addEventListener('click', function() {
        
    var passwordLength = document.querySelector('#length').value

    var chars = ''
    
    if(upperCase.checked) {
        
        chars += upperChars

    }

    if(lowerCase.checked) {

        chars += lowerChars

    }

    if(numbers.checked) {

        chars += numbersChars

    }

    if(symbols.checked) {

        chars += symbolsChars

    }

    if(chars === '') {

        return alert('Please select at least one option')

    }


    var password = ''

    for(var i = 0; i < passwordLength; i++) {

        var randam = Math.floor(Math.random() * chars.length)

        password += chars[randam]

    }

    getInputPassword.value = password

})


copyBtn.addEventListener('click', function() {

    getInputPassword.select()

    document.execCommand('copy')

    getInputPassword.value = ''

    alert('password copied to clipbord')

})