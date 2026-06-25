
function signup() {

    var name = document.querySelector("#s-name").value
    var email = document.querySelector("#s-email").value
    var password = document.querySelector("#s-password").value


    var userObj = {
        name: name,
        email: email,
        password: password
    }

    var users = localStorage.getItem("users")

    if (users === null) {

        users = []

    }
    else {

        users = JSON.parse(users)

    }


    // now we check out the existing email 

    var emailExist = false

    for (var i = 0; i < users.length; i++) {

        if (users[i].email === email) {

            emailExist = true
            break
        }

    }

    if (emailExist) {

        alert("Email already existing")
        return

    }

    users.push(userObj)

    localStorage.setItem("users", JSON.stringify(users))

    alert("Sign up successfull")

    location.href = "./login.html"

}


function login() {

    console.log("login system says")

    var email = document.querySelector("#l-email").value
    var password = document.querySelector("#l-password").value

    var users = JSON.parse(localStorage.getItem("users"))

    var found = false

    for (var i = 0; i < users.length; i++) {

        if (users[i].email === email && users[i].password === password) {

            found = true
            break

        }


    }


    if (found) {

        alert("login successful")

        location.href = "./dashboard.html"

    }
    else {

        alert("Something went to wrong")

    }


}



function listed() {

    var users = JSON.parse(localStorage.getItem("users")) || []

    var getTable = document.querySelector("#tableBody")

    for (var i = 0; i < users.length; i++) {

        getTable.innerHTML +=

            "<tr>" +

            "<td>" + (i + 1) + "</td>" +
            "<td>" + users[i].name + "</td>" +
            "<td>" + users[i].email + "</td>" +

            "</tr>"

    }


}

listed()


function logout() {

    location.href = "./login.html"

}

