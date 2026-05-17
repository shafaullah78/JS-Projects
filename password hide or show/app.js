


// var password = document.querySelector('#password')
// var btn = document.querySelector('#btn')
// var isShow = false

// btn.addEventListener('click', function () {

//     if (isShow === false) {
//         password.type = 'text'
//         btn.innerHTML = 'Hide'

//         isShow = true

//     } else {

//         password.type = 'password'
//         btn.innerHTML = 'show'

//         isShow = false
//     }

// })




// 2 input field of pasword is taken 


var password = document.querySelector('#password')
var btn = document.querySelector('#btn')

var confirmPassword = document.querySelector('#confirm')
var btn2 = document.querySelector('#btn2')

var logIn = document.querySelector('#login')

var isShow1 = false
var isShow2 = false

btn.addEventListener('click', function () {

    if (isShow1 === false) {
        password.type = 'text'
        btn.innerHTML = 'Hide'

        isShow1 = true
    } else {
        password.type = 'password'
        btn.innerHTML = 'Show'

        isShow1 = false
    }

})


btn2.addEventListener('click', function () {
    if (isShow2 === false) {
        confirmPassword.type = 'text'
        btn2.innerHTML = 'Hide'

        isShow2 = true

    } else {
    
        confirmPassword.type = 'password'
        btn2.innerHTML = 'Show'
  
        isShow2 = false
    }
})


function discharge() {
    password.value = ''
    confirmPassword.value = ''
}


logIn.addEventListener('click', function() {

    if(password.value === confirmPassword.value) {
        alert('Log in successful')
    }else{
        alert('warning! Your password is not matching')
    }

    discharge()

})