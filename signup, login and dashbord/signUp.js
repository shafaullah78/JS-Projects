
let signUpBtn = document.querySelector("#signUp")


signUpBtn.addEventListener("click", function () {
    
    let users = JSON.parse(localStorage.getItem("users")) || []
    let signUpName = document.querySelector("#s-name")
    let signUpEmail = document.querySelector("#s-email")
    let signUpPass = document.querySelector("#s-pass")

    if (signUpName.value === "" ||
        signUpEmail.value === "" ||
        signUpPass.value === ""
    ) {

        alert("Please insert the input values")
        return

    }

    var userObj = {

        name: signUpName.value,
        email: signUpEmail.value,
        password: signUpPass.value

    }

    users.push(userObj)

    localStorage.setItem("users", JSON.stringify(users))

    location.href = "./login.html"

    signUpName.value = ""
    signUpEmail.value = ""
    signUpPass.value = ""



})