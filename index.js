let pedido = document.getElementsByClassName('carousel-item');
let pedidos = pedido;
let no = document.getElementsByClassName('none');
let california = document.getElementById('california')
let extras = document.getElementById('extra')
function addProductTexas(){
     
Swal.fire({
    title:'Agregaste una Texas Burguer a tu pedido',
    color: 'orange',
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonText: 'ok',
    confirmButton:'btn btn-light',
} )
    let listaPadre = document.getElementById("pedido-carro");
    listaPadre.innerHTML +=  pedidos[0].innerHTML;

};
function addProductCali(){
    Swal.fire({
        title:'Agregaste una California Burguer a tu pedido',
        color: 'orange',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'ok',
        confirmButton:'btn btn-light',
    } )
    let listaPadre = document.getElementById("orden");
    listaPadre.innerHTML +=   pedidos[1].innerHTML;
    no[2, 3].classList.add('show');

};
function addProductPancho(){
    Swal.fire({
        title:'Agregaste Super Pancho a tu pedido',
        color: 'orange',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'ok',
        confirmButton:'btn btn-light',
    } )
    let listaPadre = document.getElementById("orden");
    listaPadre.innerHTML +=   pedidos[5].innerHTML;
    /*no[2, 3].classList.add('show');*/

};
function addProductPapas(){
    Swal.fire({
        title:'Agregaste Papas Tabak a tu pedido',
        color: 'orange',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'ok',
        confirmButton:'btn btn-light',
    } )
    let listaPadre = document.getElementById("orden");
    listaPadre.innerHTML +=   pedidos[6].innerHTML;
    /*no[2, 3].classList.add('show');*/

};

function addProductNY(){
    Swal.fire({
        title:'Agregaste una NY Burguer a tu pedido',
        color: 'orange',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'ok',
        confirmButton:'btn btn-light',
    } )
    let listaPadre = document.getElementById("orden");
    no[4, 5].classList.add('show');

    listaPadre.innerHTML +=   pedidos[2].innerHTML;
};
function addProductH(){
    Swal.fire({
        title:'Agregaste una Hawai Burguer a tu pedido :)',
        color: 'orange',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'ok',
        confirmButton:'btn btn-light',
    } )
    let listaPadre = document.getElementById("orden");
    no[6, 7].classList.add('show');
    listaPadre.innerHTML +=   pedidos[3].innerHTML;
};