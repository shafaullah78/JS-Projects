
var balance = 50000

var correctPin = 1234

var userPin = Number(prompt('Please enter your PIN)'))


if (userPin === correctPin) {

    var option;

    do {

        option = Number(prompt(

            "1. Cheak Balance \n" +

            "2. Deposit \n" +

            "3. Withdraw \n" +

            "4. Exit \n \n" +

            "Enter your  choice"

        ))


        if (option === 1) {

            alert('Your balance is ' + balance)

        }

        else if (option === 2) {

            var deposit = Number(prompt('Enter amount to deposit'))

            balance = balance + deposit

            alert('Your balance now: ' + balance)

        }
        else if (option === 3) {

            var withdraw = Number(prompt('Enter balance to with draw'))

            if (withdraw <= balance) {

                balance = balance - withdraw

                alert('Remaining balance is: ' + balance)

            } else {

                alert('Insuficient balance')

            }

        }
        else if (option === 4) {

            alert('Thanks for using ATM')

        }
        else {

            alert('invalid option')

        }


    } while (option != 4)


} else (

    alert('Your PIN is incorrect')

)