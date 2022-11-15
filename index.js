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
btnPago.value += 10;
btnPago.innerText = parseInt(btnPago.value) ;
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