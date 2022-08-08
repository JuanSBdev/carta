let pedido = document.getElementsByClassName('carousel-item');
let pedidos = pedido;
let no = document.getElementsByClassName('none');
let california = document.getElementById('california')
let extras = document.getElementById('extra')
function addProductTexas(){
    let listaPadre = document.getElementById("orden");
    no[0, 1].classList.add('show');
    listaPadre.innerHTML +=  pedidos[0].innerHTML;

};
function addProductCali(){
    let listaPadre = document.getElementById("orden");
    listaPadre.innerHTML +=   pedidos[1].innerHTML;
    no[2, 3].classList.add('show');

};
function addProductPancho(){
    let listaPadre = document.getElementById("orden");
    listaPadre.innerHTML +=   pedidos[5].innerHTML;
    no[2, 3].classList.add('show');

};

function addProductNY(){
    let listaPadre = document.getElementById("orden");
    no[4, 5].classList.add('show');

    listaPadre.innerHTML +=   pedidos[2].innerHTML;
};
function addProductH(){
    let listaPadre = document.getElementById("orden");
    no[6, 7].classList.add('show');
    listaPadre.innerHTML +=   pedidos[3].innerHTML;
}

/* 
solucionar el value de los form select para que sumen 100 por extra

*/
/* dia de repaso teorico */