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
} );
let nuev = document.createElement('div');
let listaPadre = document.getElementById("pedido");
nuev.innerHTML = pedidos[0].innerHTML;
nuev.classList.add('orden');
listaPadre.appendChild(nuev);
//la funcion antes:
//    let listaPadre = document.getElementById("pedido");
//listaPadre.innerHTML +=  pedidos[0].innerHTML;

};
function addProductCali(){
    Swal.fire({
        title:'Agregaste una California Burguer a tu pedido',
        color: 'orange',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'ok',
        confirmButton:'btn btn-light',
    } );
    let nuev = document.createElement('div');
let listaPadre = document.getElementById("pedido");
nuev.innerHTML = pedidos[1].innerHTML;
nuev.classList.add('orden');
listaPadre.appendChild(nuev);
   
};
function addProductPancho(){
    Swal.fire({
        title:'Agregaste Super Pancho a tu pedido',
        color: 'orange',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'ok',
        confirmButton:'btn btn-light',
    } );

let nuev = document.createElement('div');
let listaPadre = document.getElementById("pedido");
nuev.innerHTML = pedidos[5].innerHTML;
nuev.classList.add('orden');
listaPadre.appendChild(nuev);
};
function addProductPapas(){
    Swal.fire({
        title:'Agregaste Papas Tabak a tu pedido',
        color: 'orange',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'ok',
        confirmButton:'btn btn-light',
    } );

    let nuev = document.createElement('div');
let listaPadre = document.getElementById("pedido");
nuev.innerHTML = pedidos[6].innerHTML;
nuev.classList.add('orden');
listaPadre.appendChild(nuev);

};

function addProductNY(){
    Swal.fire({
        title:'Agregaste una NY Burguer a tu pedido',
        color: 'orange',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'ok',
        confirmButton:'btn btn-light',
    } );
    let nuev = document.createElement('div');
let listaPadre = document.getElementById("pedido");
nuev.innerHTML = pedidos[2].innerHTML;
nuev.classList.add('orden');
listaPadre.appendChild(nuev);
};



function addProductH(){
    Swal.fire({
        title:'Agregaste una Hawai Burguer a tu pedido :)',
        color: 'orange',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'ok',
        confirmButton:'btn btn-light',
    } );
    let nuev = document.createElement('div');
let listaPadre = document.getElementById("pedido");
nuev.innerHTML = pedidos[3].innerHTML;
nuev.classList.add('orden');
listaPadre.appendChild(nuev);
};