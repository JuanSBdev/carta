let pedido = document.getElementsByClassName('carousel-item');
let pedidos = pedido;
function addProduct(){
    let listaPadre = document.getElementById("orden");
    console.log(listaPadre);
    listaPadre.innerHTML = pedidos[0].innerHTML;
}
