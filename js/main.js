// START OBJECTS
$(document).ready(function () {    
$("#filterBtn").click (function (){
    $("#filter").slideToggle()
})

// GET METHOD
const URLGET = "data/products.json";
    $.get (URLGET, function (data, status){
        if (status == "success"){
            for (const lit of data){
            products.push(new Product(lit.code, lit.name, lit.price, lit.img, lit.category, lit.quantity));
            }
            
    }
    for (const product of products) {
        $("#productsUI"). append (`<div class="card">
                                <h2 class="cardTitle">${product.name}</h2> 
                                <img src="${product.img}" class="imgCards">
                                <h4 class="cardSubtitle">Precio: $${product.price}</h4>
                                <button id="${product.code}" class="btnBuy">Agregar al carrito</button>
                                <div>`)} 

                                const buttons = $(".btnBuy");
                                for (const buy of buttons) {
                                    buy.onclick = buyHandler;
                            }
                            $(".btnBuy").click (function (){
                                swal("Producto añadido correctamente!", "" , "success");
                            })                          
    })  
});

window.addEventListener ("load", () =>{
    $(".loading").remove();
});

let basket;

if ("basket" in localStorage) {
    basket = JSON.parse(localStorage.getItem("basket"));
    if(basket.length){
        let quantity = document.getElementById('quantity').src="./img/addToCart.svg"
    }
}else{
    basket=[];
}

function buyHandler(e) {
    const productID = e.target.id
    const selected = basket.find(product => product.code == productID);
    if(selected == undefined){
        basket.push(products.find(p => p.code == productID));
    }else{
        //SI SE ENCONTRO AGREGAR UN CANTIDAD
        selected.adding(1);
    }
    
    localStorage.setItem("basket", JSON.stringify(basket));
    if(basket.length){
        let quantity = document.getElementById('quantity').src="./img/addedToCart.svg"
    }
}

if(basket.length){
    let quantity = document.getElementById('quantity').src="./img/addedToCart.svg"
}
else {
    let quantity = document.getElementById('quantity').src="./img/addToCart.svg"
}

// CONTACT SECTION
//material contact form animation
$('.contact-form').find('.form-control').each(function() {
    var targetItem = $(this).parent();
    if ($(this).val()) {
      $(targetItem).find('label').css({
        'top': '10px',
        'fontSize': '14px'
      });
    }
  })
  $('.contact-form').find('.form-control').focus(function() {
    $(this).parent('.input-block').addClass('focus');
    $(this).parent().find('label').animate({
      'top': '10px',
      'fontSize': '14px'
    }, 300);
  })
  $('.contact-form').find('.form-control').blur(function() {
    if ($(this).val().length == 0) {
      $(this).parent('.input-block').removeClass('focus');
      $(this).parent().find('label').animate({
        'top': '25px',
        'fontSize': '18px'
      }, 300);
    }
  })