

// ab local storage main data add krny ka process kr rahy hain 

var students = JSON.parse(localStorage.getItem("students")) || []

// ab html inputs ko get kr rahy hain 

var studentName = document.querySelector("#studentName")
var studentAge = document.querySelector("#studentAge")
var studentMarks = document.querySelector("#studentMarks")
var studentID = document.querySelector("#studentID")


// ab ham add button ko get kr rahy hain 
var addBtn = document.querySelector("#addBtn")

addBtn.addEventListener("click", addRecord)

function addRecord() {

    if (

        studentAge.value === "" ||
        studentID.value === "" ||
        studentMarks.value === "" ||
        studentName.value === ""

    ) {

        Swal.fire({
            title: "Please insert the field values",
            showClass: {
                popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    ` },
            hideClass: {
                popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    ` }
        });

        return

    }


    var studentObj = {
        id: studentID.value,
        name: studentName.value,
        age: studentAge.value,
        marks: studentMarks.value
    }

    students.push(studentObj)
    localStorage.setItem("students", JSON.stringify(students))

    renderStudents()

    studentAge.value = ""
    studentID.value = ""
    studentMarks.value = ""
    studentName.value = ""

}


function renderStudents() {

    var tableBody = document.querySelector("#tableBody")

    tableBody.innerHTML = ""

    for (var i = 0; i < students.length; i++) {

        tableBody.innerHTML += `

        <tr>
        
           <td>${students[i].id}</td>
           <td>${students[i].name}</td>
           <td>${students[i].age}</td>
           <td>${students[i].marks}</td>
        
        </tr>

        `

    }

}

var searchBtn = document.querySelector("#searchBtn")
var editIndex = -1

searchBtn.addEventListener("click", searchData)

function searchData() {

    var id = studentID.value.trim()
    var found = false

    if (id === "") {

        Swal.fire({
            title: "Please insert the student ID",
            showClass: {
                popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    ` },
            hideClass: {
                popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    ` }
        });

        return

    }
    else {

        for (var i = 0; i < students.length; i++) {

            if (students[i].id.trim() === id) {

                studentName.value = students[i].name
                studentAge.value = students[i].age
                studentID.value = students[i].id
                studentMarks.value = students[i].marks

                editIndex = i
                found = true
                break

            }

        }

        if (!found) {

            Swal.fire({
                title: "Not found",
                showClass: {
                    popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    ` },
                hideClass: {
                    popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    ` }
            });

            return
        }

    }


}


var updateBtn = document.querySelector("#updateBtn")

updateBtn.addEventListener("click", updateData)

function updateData() {

    if (editIndex === -1) {

        Swal.fire({
            title: "Please search a student first!",
            showClass: {
                popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    ` },
            hideClass: {
                popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    ` }
        });

        return
    }

    if (studentAge.value === "" ||
        studentID.value === "" ||
        studentMarks.value === "" ||
        studentName.value === ""
    ) {
        alert("Please fill all the fields")
        return
    }

    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {

            students[editIndex].name = studentName.value
            students[editIndex].id = studentID.value
            students[editIndex].marks = studentMarks.value
            students[editIndex].age = studentAge.value

            localStorage.setItem("students", JSON.stringify(students))

            renderStudents()


            studentAge.value = ""
            studentID.value = ""
            studentMarks.value = ""
            studentName.value = ""

            editIndex = -1

            Swal.fire("Saved!", "", "success");

        }
        else if (result.isDenied) Swal.fire("Changes are not saved", "", "info");
    });






}


var deleteBtn = document.querySelector("#deleteBtn")

deleteBtn.addEventListener("click", deleteData)

function deleteData() {

    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: true
    });

    swalWithBootstrapButtons.fire({
        title: "Are you sure?",
        text: "Are you want to delete all the data!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {

            // ye backup ban gia 
            trash = [...students]
            localStorage.setItem("trash", JSON.stringify(trash))

            // ab students ko delete krna hai 

            students = []
            localStorage.setItem("students", JSON.stringify(students))

            renderStudents()


            swalWithBootstrapButtons.fire({
                title: "Deleted!",
                text: "Your record has been deleted.",
                icon: "success"
            });


        }

        else if (result.dismiss === Swal.DismissReason.cancel)
            /* Read more about handling dismissals below */
            swalWithBootstrapButtons.fire({
                title: "Cancelled",
                text: "Your record is safe:)",
                icon: "error"
            });
    });

}


var recoveryBtn = document.querySelector("#recoveryBtn")

recoveryBtn.addEventListener("click", recoveryData)

function recoveryData() {

    trash = JSON.parse(localStorage.getItem("trash")) || []

    if (trash.length === 0) {

        Swal.fire({
            title: "Not deleted data found",
            showClass: {
                popup: `
      animate__animated
      animate__fadeInUp
      animate__faster
    ` },
            hideClass: {
                popup: `
      animate__animated
      animate__fadeOutDown
      animate__faster
    ` }
        });

        return

    }


    students = [...trash]

    localStorage.setItem("students", JSON.stringify(students))

    trash = []

    localStorage.setItem("trash", JSON.stringify(trash))

    renderStudents()

    // data recovery ka alert hai 

    Swal.fire({
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500
    });

}




renderStudents()


