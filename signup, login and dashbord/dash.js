
let tbody = document.querySelector("#tbody")

function loadData() {

   let getData = JSON.parse(localStorage.getItem("users"))

   tbody.innerHTML = ""

   for (let i = 0; i < getData.length; i++) {

      let currentUser = document.querySelector("#welcome")

      currentUser.innerHTML = `Welcome ${getData[i].name}`

      tbody.innerHTML += `
    
       <tr>
        
          <td>${getData[i].name}</td>
          <td>${getData[i].email}</td>

       </tr>

    `

   }

}


let logoutBtn = document.querySelector("#logout")

logoutBtn.addEventListener("click", function () {


   Swal.fire({
      title: "Are you sure?",
      text: "Are you want to logout, press yes",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes"
   }).then((result) => {
      if (result.isConfirmed) {

         location.href = "./login.html"

      }
   });

})



loadData()