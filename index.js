let pedido = document.getElementsByClassName('carousel-item');
let pedidos = pedido;
let no = document.getElementsByClassName('none');
let california = document.getElementById('california')
let btnPago = document.getElementById('clickButton')
function paga(){
    
}

function addProductTexas(){
    
    Swal.fire({
        title:'Agregaste una texas a tu pedido :)',
        color: 'orange',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'Quitar',
    } ).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregado',
            showConfirmButton: false,
            timer: 1500

          });
          let nuev = document.createElement('div');
let listaPadre = document.getElementById("pedido");
nuev.innerHTML = pedidos[0].innerHTML;
nuev.classList.add('orden');
listaPadre.appendChild(nuev);
let precio = 2000;
let era = Number(btnPago.value);
btnPago.value = era + precio;
btnPago.innerText = "pagar " + btnPago.value + "$";
        }
        else if (result.isDenied) {
        }
        else{        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Nope!',
            showConfirmButton: false,
            timer: 1500
          })
    }
      });

//la funcion antes:
//    let listaPadre = document.getElementById("pedido");
//listaPadre.innerHTML +=  pedidos[0].innerHTML;

};
function addProductCali(){
    Swal.fire({
        title:'Agregaste una cali a tu pedido :)',
        color: 'orange',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'Quitar',
    } ).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregado',
            showConfirmButton: false,
            timer: 1500

          });
          let nuev = document.createElement('div');
let listaPadre = document.getElementById("pedido");
nuev.innerHTML = pedidos[1].innerHTML;
nuev.classList.add('orden');
listaPadre.appendChild(nuev);
let precio = 1500;
let era = Number(btnPago.value);
btnPago.value = era + precio;
btnPago.innerText = "pagar " + btnPago.value + "$";
        }
        else if (result.isDenied) {
        }
        else{        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Nope!',
            showConfirmButton: false,
            timer: 1500
          })
    }
      });


   
};
function addProductFried(){
    Swal.fire({
        title:'Agregaste Fried Chicken a tu pedido',
        color: 'orange',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'Quitar',
    } ).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregado',
            showConfirmButton: false,
            timer: 1500

          });
          let nuev = document.createElement('div');
let listaPadre = document.getElementById("pedido");
nuev.innerHTML = pedidos[4].innerHTML;
nuev.classList.add('orden');
let precio = 900;
let era = Number(btnPago.value);
btnPago.value = era + precio;
btnPago.innerText = "pagar " + btnPago.value + "$";
listaPadre.appendChild(nuev);


        }
        else if (result.isDenied) {
        }
        else{        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Nope!',
            showConfirmButton: false,
            timer: 1500
          })
    }
      });


};

function addProductPancho(){
    Swal.fire({
        title:'Agregaste un pancho a tu pedido',
        color: 'orange',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'Quitar',
    } ).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregado',
            showConfirmButton: false,
            timer: 1500

          });
          let nuev = document.createElement('div');
let listaPadre = document.getElementById("pedido");
nuev.innerHTML = pedidos[5].innerHTML;
nuev.classList.add('orden');
listaPadre.appendChild(nuev);
let precio = 500;
let era = Number(btnPago.value);
btnPago.value = era + precio;
btnPago.innerText = "pagar " + btnPago.value + "$";
        }
        else if (result.isDenied) {
        }
        else{        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Nope!',
            showConfirmButton: false,
            timer: 1500
          })
    }
      });
};
function addProductPapas(){
    Swal.fire({
        title:'Agregaste papas a tu pedido',
        color: 'orange',
        showCancelButton: true,
        showConfirmButton: true,
        confirmButtonText: 'Ok',
        cancelButtonText: 'Quitar',
    } ).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Agregado',
            showConfirmButton: false,
            timer: 1500

          });
          let nuev = document.createElement('div');
let listaPadre = document.getElementById("pedido");
nuev.innerHTML = pedidos[6].innerHTML;
nuev.classList.add('orden');
listaPadre.appendChild(nuev);
let precio = 700;
let era = Number(btnPago.value);
btnPago.value = era + precio;
btnPago.innerText = "pagar " + btnPago.value + "$";
        }
        else if (result.isDenied) {
        }
        else{        Swal.fire({
            position: 'center',
            icon: 'info',
            title: 'Nope!',
            showConfirmButton: false,
            timer: 1500
          })
    }
      });

};

function addProductNY(){
  Swal.fire({
    title:'Agregaste una NY burger a tu pedido',
    color: 'orange',
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonText: 'Ok',
    cancelButtonText: 'Quitar',
} ).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Agregado',
        showConfirmButton: false,
        timer: 1500

      });
      let nuev = document.createElement('div');
let listaPadre = document.getElementById("pedido");
nuev.innerHTML = pedidos[2].innerHTML;
nuev.classList.add('orden');
listaPadre.appendChild(nuev);
let precio = 1500;
let era = Number(btnPago.value);
btnPago.value = era + precio;
btnPago.innerText = "pagar " + btnPago.value + "$";
    }
    else if (result.isDenied) {
    }
    else{        Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Nope!',
        showConfirmButton: false,
        timer: 1500
      })
}
  });
};



function addProductH(){
  Swal.fire({
    title:'Agregaste una Hawai burger a tu pedido',
    color: 'orange',
    showCancelButton: true,
    showConfirmButton: true,
    confirmButtonText: 'Ok',
    cancelButtonText: 'Quitar',
} ).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Agregado',
        showConfirmButton: false,
        timer: 1500

      });
      let nuev = document.createElement('div');
let listaPadre = document.getElementById("pedido");
nuev.innerHTML = pedidos[3].innerHTML;
nuev.classList.add('orden');
listaPadre.appendChild(nuev);
let precio = 1800;
let era = Number(btnPago.value);
btnPago.value = era + precio;
btnPago.innerText = "pagar " + btnPago.value + "$";
    }
    else if (result.isDenied) {
    }
    else{        Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Nope!',
        showConfirmButton: false,
        timer: 1500
      })
}
  });
};