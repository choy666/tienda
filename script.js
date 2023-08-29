function guardarAlmacenamientoLocal(llave, valor_a_guardar) {
    // llave seria la direccion de memoria, nombre de acceso a informacion
    // informacion a guardar es el objeto que vamos a guardar en localstorage, lo convierto en json "cadena de texto"
    localStorage.setItem(llave, JSON.stringify(valor_a_guardar))
}
// retorno lista de productos 
function obtenerAlmacenamientoLocal(llave) {
    // lista convertidos como objeto js
    const listaProductos = JSON.parse(localStorage.getItem(llave));
    return listaProductos;
}

//inicializacion
var btnUp;
var btnDown;
var checCard1;
var checCard2;
var checCard3;
var card1;
var card2;
var card3;
var itemText;

// lista de productos, almacena una lista de productos de lo contrario un array
let productos = obtenerAlmacenamientoLocal('productos') || [];

let contendorProductos = document.getElementById('contenedorProductos');


function iniciar(){
    btnUp = document.getElementById('btn-up');
    btnDown = document.getElementById('btn-down');

    checCard1 = document.getElementById('seccion1');
    checCard2 = document.getElementById('seccion2');
    checCard3 = document.getElementById('seccion3');
    checCard1.checked = true;
    checCard2.checked = true;
    checCard3.checked = true;

    checCard1.addEventListener('click', filtro);
    checCard2.addEventListener('click', filtro);
    checCard3.addEventListener('click', filtro);

    // btnUp.addEventListener('click', cantidadItems);

    // btnDown.addEventListener('click', cantidadItems);
    //filtros
    card1 = document.getElementsByClassName('card1');
    card2 = document.getElementsByClassName('card2');
    card3 = document.getElementsByClassName('card3');
    filtro();

    itemText = document.getElementById('item-text');
    // itemText.value=0;

    // muestro los productos
    for(var i=0; i<productos.length; i++) {
        contendorProductos.innerHTML = `<div class="card col-5 col-md-4 col-lg-3 ${productos[i].filtro}">
                                            <img class="card-img-top" src="${productos[i].urlImagen}">
                                            <div class="card-footer">
                                                <p class="nombreProducto">${productos[i].nombre}</p>
                                                <p class="precioProducto">Precio: $${productos[i].valor}</p> 
                                            </div>
                                        </div>`;;
    }


    /*
        <div class="card col-5 col-md-4 col-lg-3 card1">
            <img src="../img/1.jpeg" alt="" class="card-img-top">
            <h4>lola1</h4>
            <div class="card-footer">
                <button type="button" class="bi-arrow-up-square-fill btn-buy" id="btn-up"></button>
                <h2 id="item-text">0</h2>
                <button type="button" class="bi-arrow-down-square-fill btn-buy" id="btn-down"></button>
            </div>
            <button class="btn-buy">
                <svg fill="black" viewBox="0 0 576 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
                </svg>
            </button>
        </div>
    */ 
    
}
function filtro(){
    if(checCard1.checked == false){
        for(var i=0; i<card1.length; i++){
            card1[i].style.display = 'none';
        }
    }
    else{
        for(var i=0; i<card1.length; i++){
            card1[i].style.display = 'flex';
        }
    }
    if(checCard2.checked == false){
        for(var i=0; i<card2.length; i++){
            card2[i].style.display = 'none';
        }
    }
    else{
        for(var i=0; i<card2.length; i++){
            card2[i].style.display = 'flex';
        }
    }
    if(checCard3.checked == false){
        for(var i=0; i<card3.length; i++){
            card3[i].style.display = 'none';
        }
    }
    else{
        for(var i=0; i<card3.length; i++){
            card3[i].style.display = 'flex';
        }
    }
}
function cantidadItems(evento){
    var idEvento = evento.target.id;
    if(idEvento=="btn-up"){
        itemText.value+=1;
        itemText.innerHTML = itemText.value;
    }
    else if(itemText.value>0){
        itemText.value-=1;
        itemText.innerHTML = itemText.value;
    }
}
window.addEventListener("load",iniciar);