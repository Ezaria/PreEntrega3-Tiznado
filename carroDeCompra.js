//La idea es crear un carrito de comprar en onde la persona pueda agregar y quitar productos, en donde se visualice el precio unitario, las unidades y el total a pagar por parte de este

//variables de lista para los productos y total para sumar precios
let lista =JSON.parse(localStorage.getItem('lista') ) || [];
let total = 0;
let listaOculta = JSON.parse(localStorage.getItem('listaOculta') ) || [];;

//se selecciona class correspondientes que se modificaran en el html
const totalList = document.querySelector(".totalList");
const totalPrice = document.querySelector(".totalPrice");
const totalItems = document.getElementById("totalItems");
const close = document.getElementsByClassName("close");


//lista de productos  que representan  a vender

const  productos = [
  {
    nombre: "Camisa Negra",
    descripcion: "Diseño Clasico",
    precio: 20000,
    id: 1,
    imagen: "./images/producto1.jpg",
  },
  {
    nombre: "Camisa Verde",
    descripcion: "Diseño Moderno",
    precio: 13000,
    id: 2,
    imagen: "./images/producto2.jpg"
  },
  {
    nombre: "Chaqueta Verde",
    descripcion: "Diseño Invierno",
    precio: 19000,
    id: 3,
    imagen: "./images/producto3.jpg"
  },
  {
      nombre: "Polar Negro",
      descripcion: "Diseño Indoor",
      precio: 23000,
      id: 4,
      imagen: "./images/producto4.jpg",
    },
    {
      nombre: "Camisa Seoul",
      descripcion: "Diseño Deportivo",
      precio: 45000,
      id: 5,
      imagen: "./images/producto5.jpg"
    },
    {
      nombre: "Gorro Gris",
      descripcion: "Diseño Street",
      precio: 7000,
      id: 6,
      imagen: "./images/producto6.jpg"
    },
    {
      nombre: "Camisa Blanca",
      descripcion: "Diseño Bicicleta",
      precio: 15000,
      id: 7,
      imagen: "./images/producto7.jpg"
    },
    {
      nombre: "Camisa Estampado Militar ",
      descripcion: "Diseño Bicicleta",
      precio: 18000,
      id: 8,
      imagen: "./images/producto8.jpg"
    },
    {
      nombre: "Camisa Estampado Militar Rosado",
      descripcion: "Diseño Bicicleta",
      precio: 13000,
      id: 9,
      imagen: "./images/producto9.jpg"
    },
 
]


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
      boton.addEventListener('click', ()=> {
        lista.push(producto);
        listaOculta.push(productos);
        actualizarTotal(lista);
        actualizarLista(producto);
      
        localStorage.setItem('lista', JSON.stringify(lista));
        localStorage.setItem('listaOculta', JSON.stringify(listaOculta));

        console.log(lista)
    })
      


      gridProducts.appendChild(gridProducts_main);
      gridProducts_main_bottom.appendChild(boton)



  })


}

//renderiza los productos
crearProducto()


// se actualiza el total a pagar
function actualizarTotal() {
  let total = 0
  for (let id of lista) {
    total += id.precio;
  };
  // actualiza el texto en html
  totalPrice.innerText = total;
  
}


// se actualiza de productos que se llevan y se muestra en una lista de html y se crean el componente close (x) para poder eliminar de lista de productos a recibir
function actualizarLista(producto) {
  const li = document.createElement("li");
  const nombreProducto = producto.nombre;
  const texto = document.createTextNode(nombreProducto);
  
  li.appendChild(texto);
  totalItems.appendChild(li);

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Obtener el índice del elemento en la lista oculta para eliminar
  const indiceItemEliminar = listaOculta.findIndex(producto => producto.nombre === nombreProducto);

  // Se oculta el item y se elimina el item del array

  for (let elementoEliminar = 0; elementoEliminar < close.length; elementoEliminar++) {
    close[elementoEliminar].onclick = function() {

    //Se oculta el elemento
      let div = this.parentElement;
      div.style.display = "none";

    //Se elimina del array
      lista.splice(elementoEliminar, 1);
      listaOculta.splice(elementoEliminar, 1);
    
    //Se actualiza en la consola
      console.log(lista)
    
    //se actualiza el monto total
      actualizarTotal()

    }
  }
} 











