let pedido = document.getElementsByClassName('carousel-item');
let pedidos = pedido;
function addProduct(){
    let listaPadre = document.getElementById("orden");
    console.log(listaPadre);
    listaPadre.innerHTML =  '<h2> tu orden </h2>' + pedidos[0].innerHTML;
}
