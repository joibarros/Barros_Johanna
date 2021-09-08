// START FILTER
let filter = document.getElementById ("filter")
filter.innerHTML = `<button id='ajuares' class='btnFilter'>Ajuares</button>
<button id='baberos' class='btnFilter'>Baberos</button>
<button id='muñecos' class='btnFilter'>Muñecos</button>
<button id='accesorios' class='btnFilter'>Accesorios</button>
<button id='ropa' class='btnFilter'>Ropa</button>
`;

const filterButtons = document.getElementsByClassName('btnFilter');
for (const buy of filterButtons) {
    buy.addEventListener("click" , filteredProducts);
}

function filteredProducts (e){
    let filtered = products.filter (obj => obj.category == e.target.id)

    let filter = document.getElementById ("filter")
    filter.innerHTML =  `<button id='back'>Volver al listado</button>
    <button id='ajuares' class='btnFilter'>Ajuares</button>
    <button id='baberos' class='btnFilter'>Baberos</button>
    <button id='muñecos' class='btnFilter'>Muñecos</button>
    <button id='accesorios' class='btnFilter'>Accesorios</button>
    <button id='ropa' class='btnFilter'>Ropa</button>
    `;

    // BACK BUTTON FUNCTIONALITY
    let btnBack = document.getElementById("back")
    btnBack.addEventListener("click", (e) => {
    filtered = products;
    let filter = document.getElementById("filter")
    filter.innerHTML = `<button id='ajuares' class='btnFilter'>Ajuares</button>
    <button id='baberos' class='btnFilter'>Baberos</button>
    <button id='muñecos' class='btnFilter'>Muñecos</button>
    <button id='accesorios' class='btnFilter'>Accesorios</button>
    <button id='ropa' class='btnFilter'>Ropa</button>
    `;


    const filterButtons = document.getElementsByClassName('btnFilter');
    for (const buy of filterButtons) {
    buy.addEventListener("click" , filteredProducts);
    }

    for (const product of filtered) {
        const divCard = document.createElement("div");
        divCard.className = "card"
        divCard.innerHTML = `<h2 class="cardTitle">${product.name}</h2>
                            <img src="${product.img}" class="imgCards">
                            <h4 class="cardSubtitle">Precio: $${product.price}</h4>
                            <button id="${product.code}" class="btnBuy">Añadir al carrito</button>`;
                            divContainer.appendChild(divCard)
    }
    let buttons = document.getElementsByClassName("btnBuy");
    for (const buy of buttons) {
        buy.addEventListener("click" , buyHandler);
    }
    $(".btnBuy").click (function (){
        swal("¡Producto añadido al carrito!", "" , "success");
    }) 
    
    })
    let btnFiltered = document.getElementsByClassName("btnFilter")
    for (const filter of btnFiltered) {
        filter.addEventListener("click", filteredProducts)
    }
    // BTN FUNCTIONALITY
    const divContainer = document.getElementById("productsUI")
    divContainer.innerHTML = ""

    for (const product of filtered) {
        const divCard = document.createElement("div");
        divCard.className = "card"
        divCard.innerHTML = `<h2 class="cardTitle">${product.name}</h2>
                            <img src="${product.img}" class="imgCards">
                            <h4 class="cardSubtitle">Precio: $${product.price}</h4>
                            <button id="${product.code}" class="btnBuy">Añadir al carrito</button>`;
                            divContainer.appendChild(divCard)
    }

    const buttons = document.getElementsByClassName("btnBuy");
    for (const buy of buttons) {
        buy.addEventListener("click" , buyHandler);
    }
    $(".btnBuy").click (function (){
        swal("¡Producto añadido al carrito!", "" , "success");
    }) 
}