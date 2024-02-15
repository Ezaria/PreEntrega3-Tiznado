//La idea es crear un carrito de comprar en onde la persona pueda agregar y quitar productos, en donde se visualice el precio unitario, las unidades y el total a pagar por parte de este

//variables de lista para los productos y total para sumar precios
let lista = [];
let total = 0;
let listaOculta = [];

//se selecciona class correspondientes que se modificaran en el html
const totalList = document.querySelector(".totalList");
const totalPrice = document.querySelector(".totalPrice");
const totalItems = document.getElementById("totalItems");
const close = document.getElementsByClassName("close");


//lista de productos  que representan  a vender

const productos = [
  {
    nombre: "Camisa Negra",
    precio: 20000,
    id: 1,
  },
  {
    nombre: "Camisa Verde",
    precio: 13000,
    id: 2,
  },
  {
    nombre: "Chaqueta Verde",
    precio: 19000,
    id: 3,
  },
  {
    nombre: "Polar Negro",
    precio: 23000,
    id: 4,
  },
  {
    nombre: "Camisa Seoul",
    precio: 45000,
    id: 5,
  },
  {
    nombre: "Gorro Gris",
    precio: 7000,
    id: 6,
  },
  {
    nombre: "Camisa Blanca",
    precio: 15000,
    id: 7,
  },
  {
    nombre: "Camisa Estampado Militar ",
    precio: 18000,
    id: 8,
  },
  {
    nombre: "Camisa Estampado Militar Rosado",
    precio: 13000,
    id: 9,
  },

]


// función actualiza la lista y el total
function agregarProducto(id) {
  lista.push(productos[id-1]);
  listaOculta.push(productos[id-1]);
  actualizarTotal(lista);
  actualizarLista(id);
  console.log(lista)
}

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
function actualizarLista(id) {
  var li = document.createElement("li");
  var nombreProducto = productos[id-1].nombre;
  var texto = document.createTextNode(nombreProducto);
  
  li.appendChild(texto);
  totalItems.appendChild(li);

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  // Obtener el índice del elemento en la lista oculta para eliminar
  const indiceItemEliminar = listaOculta.findIndex(producto => producto.nombre === nombreProducto);

  // Se oculta el item y se elimina el item del array

  for (let elementoEliminar = 0; elementoEliminar < close.length; elementoEliminar++) {
    close[elementoEliminar].onclick = function() {

    //Se oculta el elemento
      var div = this.parentElement;
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











