var tbody = document.querySelector("#tbody")

var getName = localStorage.getItem("name")
var email = localStorage.getItem("email")



function loader() {

        tbody.innerHTML = `
        
        <tr> 
        
            <td> ${getName} </td> 
            <td> ${email} </td> 

       </tr>
    
    `
}




var logOut = document.getElementById("logout")

logOut.addEventListener("click", function () {
    
    localStorage.clear()
    
    location.href = "./signup.html"
    
})
    
loader()