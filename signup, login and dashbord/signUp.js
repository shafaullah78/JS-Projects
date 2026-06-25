

var signUpBtn = document.querySelector("#signUp")

signUpBtn.addEventListener('click', function () {

    var signUpName = document.getElementById("s-name")
    var signUpEmail = document.getElementById("s-email")
    var signUpPass = document.getElementById("s-pass")

    localStorage.setItem("name", signUpName.value)
    localStorage.setItem("email", signUpEmail.value)
    localStorage.setItem("password", signUpPass.value)
    
    location.href = "./login.html"
    
    signUpName.value = ""
    signUpEmail.value = ""
    signUpPass.value = ""


})
