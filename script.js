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

// let contendorProductos = document.getElementById('contenedorProductos');
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

    contendorProductos.innerHTML = '';
    for(let i = 0; i < productos.length; i++) {
        contendorProductos.innerHTML += `<div class="card col-5 col-md-4 col-lg-3 ${productos[i].filtro}">
                                            <img class="card-img-top" src="${productos[i].urlImagen}">
                                            <div class="card-footer">
                                                <p class="nombreProducto">${productos[i].nombre}</p>
                                                <p class="precioProducto">Precio: $${productos[i].valor}</p> 
                                            </div>
                                        </div>`;
        console.log(productos[i].nombre);
    }
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