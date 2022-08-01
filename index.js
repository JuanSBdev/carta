let pedido = document.getElementsByClassName('carousel-item');
let pedidos = pedido;
let no = document.getElementsByClassName('none');

function addProductTexas(){
    let listaPadre = document.getElementById("orden");
    console.log(listaPadre);
    listaPadre.innerHTML +=  pedidos[0].textContent;
};
function addProductCali(){
    let listaPadre = document.getElementById("orden");
    listaPadre.innerHTML +=   pedidos[1].innerHTML;

};
function addProductNY(){
    let listaPadre = document.getElementById("orden");
    console.log(listaPadre);
    listaPadre.innerHTML +=   pedidos[2].innerHTML;
};
function addProductH(){
    let listaPadre = document.getElementById("orden");
    console.log(listaPadre);
    listaPadre.innerHTML +=   pedidos[3].innerHTML;
}
/* aca hay que hacer una funcion [i] para no tener que poner una funcion x*/
function extras (){
    for (let i = 0; i < 10; i++){
        let no = document.getElementsByClassName('none');
        no[i].classList.add('show');

    }
    console.log('asd');
}