//La idea es crear un carrito de comprar en onde la persona pueda agregar y quitar productos, en donde se visualice el precio unitario, las unidades y el total a pagar por parte de este

//variables de lista para los productos y total para sumar precios
let lista = JSON.parse(localStorage.getItem("data")) || [];

let total = 0;


//se selecciona class correspondientes que se modificaran en el html
const totalList = document.querySelector(".totalList");
const totalPrice = document.querySelector(".totalPrice");
const totalItems = document.getElementById("totalItems");
const close = document.getElementsByClassName("close");




//crear tarjetas de los productos en el html
function crearProducto() {
  const gridProducts = document.getElementById("gridProducts");

  productos.forEach(producto => {

      const gridProducts_main = document.createElement('div');
      gridProducts_main.classList.add('gridProducts_main')

      const gridProducts_main_img = document.createElement('div');
      gridProducts_main_img.classList.add('gridProducts_main--img')
      gridProducts_main.appendChild(gridProducts_main_img);

      const imagen = document.createElement('img');
      imagen.src = producto.imagen;
      imagen.alt = producto.nombre;
      gridProducts_main_img.appendChild(imagen);



      const gridProducts_main_bottom = document.createElement('div');
      gridProducts_main_bottom.classList.add('gridProducts_main--bottom');
      gridProducts_main.appendChild(gridProducts_main_bottom);

      const gridProducts_main_bottomHeader = document.createElement('div');
      gridProducts_main_bottomHeader.textContent = producto.nombre;
      gridProducts_main_bottomHeader.classList.add('gridProducts_main--bottomHeader')
      gridProducts_main_bottom.appendChild(gridProducts_main_bottomHeader);

      const gridProducts_main_bottomSubtitle = document.createElement('div');
      gridProducts_main_bottomSubtitle.textContent = producto.descripcion;
      gridProducts_main_bottomSubtitle.classList.add('gridProducts_main--bottomSubtitle')
      gridProducts_main_bottom.appendChild(gridProducts_main_bottomSubtitle);

      const gridProducts_main_bottomPrice = document.createElement('div');
      gridProducts_main_bottomPrice.textContent = producto.precio;
      gridProducts_main_bottomPrice.classList.add('gridProducts_main--bottomPrice');
      gridProducts_main_bottom.appendChild(gridProducts_main_bottomPrice);



      const boton = document.createElement('button');
      boton.classList.add('buttonProducto');
      boton.textContent = 'Agregar';
      boton.setAttribute("onclick",`agregar(${producto.id})`);

      gridProducts_main_bottom.appendChild(boton)
  
  
      


      gridProducts.appendChild(gridProducts_main);
      



  })


}

//renderiza los productos
crearProducto()

function agregar(id) {
  let elementoSeleccionado = id;
  let buscar = lista.find((producto) => producto.id === elementoSeleccionado)

  if (buscar === undefined) {
    lista.push ({
      id: elementoSeleccionado,
      item: 1,
    });
  }

  else {
    buscar.item += 1;
  }

  console.log(lista);
  calcular();
  localStorage.setItem("data", JSON.stringify(lista));

};


function calcular() {
  let numeroProductosTotal = document.getElementById("cartAmount")
  numeroProductosTotal.innerHTML = lista.map((producto) => producto.item).reduce((x, y) => x + y,0)
  
};

calcular();



const tost = document.getElementById('toastify');

tost.addEventListener('click', () => {
  Toastify({
  text: "This is a toast",
  duration: 3000,
  destination: "https://github.com/apvarun/toastify-js",
  newWindow: true,
  close: true,
  gravity: "top", // `top` or `bottom`
  position: "left", // `left`, `center` or `right`
  stopOnFocus: true, // Prevents dismissing of toast on hover
  style: {
    background: "linear-gradient(to right, #00b09b, #96c93d)",
  },
  onClick: function(){} // Callback after click
  }).showToast(); 
})









