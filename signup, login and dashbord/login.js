

var loginBtn = document.getElementById("login")

loginBtn.addEventListener("click", function () {

    var loginEmail = document.getElementById("l-email")
    var loginPass = document.getElementById("l-pass")

    var getEmail = localStorage.getItem("email")
    var getPass = localStorage.getItem("password")

    if (loginEmail.value === getEmail && loginPass.value === getPass) {

       alert("Login successful")

        location.href = "./dashbord.html"

    }
    
    else {

     alert("Something went to wrong")

    }

})
