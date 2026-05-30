
alert('welcome to Al-shafa super store')

var item1 = 'Rice'

var price1 = +prompt('Enter the price of Rice')

var qty1 = +prompt('Enter the quantity of the Rice')

var item2 = 'flour'

var price2 = +prompt('Enter the price of flour')

var qty2 = +prompt('Enter the quantity of the flour')


var item3 = 'Tea'

var price3 = +prompt('Enter the price of Tea')

var qty3 = +prompt('Enter the quantity of the Tea')

var item4 = 'Dalta'

var price4 = +prompt('Enter the price of dalta')

var qty4 = +prompt('Enter the quantity of the dalta')

var item5 = 'Sugar'

var price5 = +prompt('Enter the price of sugar')

var qty5 = +prompt('Enter the quantity of the sugar')

var total1 = price1 * qty1

var total2 = price2 * qty2

var total3 = price3 * qty3

var total4 = price4 * qty4

var total5 = price5 * qty5

var grandTotal = total1 + total2 + total3 + total4 + total5

var discount = 0


if (grandTotal >= 10000) {

  discount = (grandTotal * 10) / 100

} else if (grandTotal >= 5000) {

  discount = (grandTotal * 5) / 100

} else if (grandTotal >= 2000) {

  discount = (grandTotal * 2) / 100

} else {

  discount = 0

}


var finalAmount = grandTotal - discount

document.writeln(

  `
    <h2 align='center'>AL-SHAFA SUPER STORE RECEIPT</h2>
    
    <table border='' width='70%' align='center'>
  
    <tr>
  
        <th>Item</th>
  
        <th>Price</th>
  
        <th>Qty</th>
  
        <th>Total amount</th>
      
    </tr>


    <tr>
      
        <td>${item1}</td>
      
        <td>${price1}</td>
      
        <td>${qty1}</td>
      
       <td>${total1}</td>
      
    </tr>


     <tr>
      
           <td>${item2}</td>
      
           <td>${price2}</td>
      
          <td>${qty2}</td>
      
          <td>${total2}</td>
      
     </tr>


     <tr>
      
         <td>${item3}</td>
      
         <td>${price3}</td>
      
         <td>${qty3}</td>
      
        <td>${total3}</td>
      
    </tr>
    

     <tr>
      
         <td>${item4}</td>
      
         <td>${price4}</td>
      
         <td>${qty4}</td>
      
        <td>${total4}</td>
      
    </tr>
    

     <tr>
      
         <td>${item5}</td>
      
         <td>${price5}</td>
      
         <td>${qty5}</td>
      
        <td>${total5}</td>
      
    </tr>
    

    <tr>
      
        <td colspan='3'>Grand Total</td>
      
        <td>${grandTotal}</td>

    </tr>
    
      
    <tr>
      
        <td colspan='3'>Discount</td>
      
        <td>${discount}</td>

    </tr>

      
    <tr>
      
        <td colspan='3'>Final Amount</td>
      
        <td>${finalAmount}</td>

    </tr>
  
    
    </table>
    
    
    `



)