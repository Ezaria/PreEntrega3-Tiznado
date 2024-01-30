//La idea es crear un carrito de comprar en onde la persona pueda agregar y quitar productos, en donde se visualice el precio unitario, las unidades y el total a pagar por parte de este

//variables de lista para los productos y total para sumar precios
let lista = [];
let total = 0;

//se selecciona class correspondientes que se modificaran en el html
const totalList = document.querySelector(".totalList");
const totalPrice = document.querySelector(".totalPrice")

//variables constantes que representan los productos a vender
const producto1 = {
    nombre: "Camisa Negra",
    precio: 20000,
    id: 1,
  };
  const producto2 = {
    nombre: "Camisa Verde",
    precio: 13000,
    id: 2,
  };
  const producto3 = {
    nombre: "Chaqueta Verde",
    precio: 19000,
    id: 3,
  };
  const producto4 = {
    nombre: "Polar Negro",
    precio: 23000,
    id: 4,
  };
  const producto5 = {
    nombre: "Camisa Seoul",
    precio: 45000,
    id: 5,
  };
  const producto6 = {
    nombre: "Gorro Gris",
    precio: 7000,
    id: 6,
  };
  const producto7 = {
    nombre: "Camisa Blanca",
    precio: 15000,
    id: 7,
  };
 
  const producto8 = {
    nombre: "Camisa Estampado Militar ",
    precio: 18000,
    id: 8,
  };
  const producto9 = {
    nombre: "Camisa Estampado Militar Rosado",
    precio: 13000,
    id: 9,
  };

// función actualiza la lista y el total
function agregarProducto(producto) {
  lista.push(producto);
  actualizarTotal();
  actualizarLista();
}

// se actualiza el total a pagar
function actualizarTotal() {
  for (let producto of lista) {
    total += producto.precio;
  }

  // actualiza el texto en html
  totalPrice.innerText = total;

  // condición pregunta si quiere comprar lo que ha agregado
  if (total >50000 ) {
    totalPrice.innerText = total + " Estas listo para comprar"
  }
}
// se actualiza de productos que se llevan y se muestra en el html
function actualizarLista() {
    for (let i = 0; i < lista.length; i++) {
        const nombreProducto = lista[i].nombre;
        totalList.innerText += " " + nombreProducto + " ";
    }
    lista = []
}

//falta agregar funciones para eliminar, determinar numeros de unidades que se tiene







