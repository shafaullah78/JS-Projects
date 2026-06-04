

var searchProduct = document.querySelector('#search')

var productsContainer = document.querySelector('#products')


var products = [

    {
        name: 'Samsung Mobile',
        price: 50000,
        image: './images/samsung.webp'
    },

    {
        name: 'Iphone 13',
        price: 150000,
        image: './images/iphone.jpg'
    },

    {
        name: 'Laptop',
        price: 80000,
        image: './images/laptop.webp'
    },

    {
        name: 'Headphones',
        price: 5000,
        image: './images/headphones.jpg'
    },

    {
        name: 'Smart Watch',
        price: 12000,
        image: './images/smart watch.webp'
    },

    {
        name: 'Bluetooth Speaker',
        price: 7000,
        image: './images/bluetooth speaker.webp'
    }


]



function showProducts() {

    productsContainer.innerHTML = ''

    for (var i = 0; i < products.length; i++) {

        productsContainer.innerHTML += `<div class = 'card'>
        
        <img src="${products[i].image}" alt="">
        <h2>${products[i].name}</h2>
        <p>price: Rs ${products[i].price}</p>
        
        
        </div>`

    }


}

showProducts()


searchProduct.addEventListener('keyup', function () {

    productsContainer.innerHTML = ''

    for (var i = 0; i < products.length; i++) {

        if (products[i].name.toLowerCase().includes(search.value.toLowerCase())) {


            productsContainer.innerHTML += `<div class = 'card'>
          
               <img src="${products[i].image}" alt="">
               <h2>${products[i].name}</h2>
               <p>price: Rs ${products[i].price}</p>
        
        
        </div>`

        }
    }

})




