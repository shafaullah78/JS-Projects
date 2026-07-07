
let loginBtn = document.querySelector("#login")

loginBtn.addEventListener("click", function () {

    let loginEmail = document.querySelector("#l-email")
    let loginPass = document.querySelector("#l-pass")

    if (
        loginEmail.value === "" ||
        loginPass.value === ""

    ) {

        alert("Please fill the input field")
        return
    }

    let users = JSON.parse(localStorage.getItem("users")) || []
let found = false
    for (let i = 0; i < users.length; i++) {

        if (
            users[i].email === loginEmail.value.trim() &&
            users[i].password === loginPass.value.trim()
        ){

            found = true
            break

        }

    }

    if(found) {

        location.href = "./dashbord.html"
        
        loginEmail.value = ""
        loginPass.value = ""
        
        alert("Login succeffull")
        
    }else {

        alert("Something went to wrong")
        
    }



})


