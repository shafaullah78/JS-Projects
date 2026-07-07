
// Inputs

var title = document.getElementById("title");
var amount = document.getElementById("amount");
var type = document.getElementById("type");
var category = document.getElementById("category");

// Button

var addBtn = document.getElementById("addBtn");

// Table

var tbody = document.getElementById("tbody");

// Dashboard

var balance = document.getElementById("balance");
var income = document.getElementById("income");
var expense = document.getElementById("expense");

var transactions = JSON.parse(localStorage.getItem("transactions")) || [];


addBtn.addEventListener("click", function () {

    addTransaction()

})


function addTransaction() {

    if (
        title.value === "" ||
        amount.value === "" ||
        type.value === "" ||
        category.value === ""
    ) {

        alert("Please Fill All Fields");
        return;
    }

    var obj = {

        title: title.value,

        amount: Number(amount.value),

        type: type.value,

        category: category.value

    };

    if (editIndex === null) {

        transactions.push(obj);

    }
    else {

        transactions[editIndex] = obj

    }


    localStorage.setItem("transactions", JSON.stringify(transactions));

    clearForm();

    showData();

    calculate();

}


function clearForm() {

    title.value = "";

    amount.value = "";

    type.value = "";

    category.value = "";

}


function showData() {

    tbody.innerHTML = "";

    for (var i = 0; i < transactions.length; i++) {

        tbody.innerHTML += `

        <tr>

        <td>${transactions[i].title}</td>

        <td>${transactions[i].category}</td>

        <td>${transactions[i].type}</td>

        <td>Rs. ${transactions[i].amount}</td>

        <td>

        <button onclick = "editBtn(${i})" class="edit">Edit</button>
        <button onclick = "delBtn(${i})" class="delete">Delete</button>
        
        </td>

        </tr>

        `;

    }

}


function calculate() {

    var totalIncome = 0;

    var totalExpense = 0;

    for (var i = 0; i < transactions.length; i++) {

        if (transactions[i].type == "Income") {

            totalIncome += transactions[i].amount;

        } else {

            totalExpense += transactions[i].amount;

        }

    }

    income.innerHTML = "Rs. " + totalIncome;

    expense.innerHTML = "Rs. " + totalExpense;

    balance.innerHTML = "Rs. " + (totalIncome - totalExpense);

}

function delBtn(index) {

    for (var i = 0; i < transactions.length; i++) {

        transactions.splice(index, 1)

        localStorage.setItem("transactions", JSON.stringify(transactions))

        calculate()
        showData()

    }

}

var editIndex = null;

function editBtn(index) {

    editIndex = index

    title.value = transactions[index].title
    amount.value = transactions[index].amount
    type.value = transactions[index].type
    category.value = transactions[index].category

}

var search = document.querySelector("#search")

search.addEventListener("click", () => {

    searchData()

})


function searchData() {

    tbody.innerHTML = "";

    var searchValue = search.value.toLowerCase();

    for (var i = 0; i < transactions.length; i++) {

        if (transactions[i].title.toLowerCase().includes(searchValue)) {

            tbody.innerHTML += `

            <tr>

                <td>${transactions[i].title}</td>
                <td>${transactions[i].category}</td>
                <td>${transactions[i].type}</td>
                <td>Rs. ${transactions[i].amount}</td>

                <td>

                    <button onclick="editBtn(${i})" class="edit">Edit</button>
                    <button onclick="delBtn(${i})" class="delete">Delete</button>

                </td>

            </tr>

            `;

        }

    }

}


calculate();

showData();

