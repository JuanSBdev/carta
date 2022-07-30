let pedido = document.getElementsByClassName('carousel-item');
let pedidos = pedido;
function addProductTexas(){
    let listaPadre = document.getElementById("orden");
    console.log(listaPadre);
    listaPadre.innerHTML +=  pedidos[0].innerHTML;
};
function addProductCali(){
    let listaPadre = document.getElementById("orden");
    console.log(listaPadre);
    listaPadre.innerHTML +=   pedidos[1].innerHTML;
};
function addProductNY(){
    let listaPadre = document.getElementById("orden");
    console.log(listaPadre);
    listaPadre.innerHTML +=   pedidos[2].innerHTML;
}
