let lista = JSON.parse(localStorage.getItem('data')) || [];





  function crearProducto() {

    if (lista != 0) {


    const flexItems = document.getElementById('flexItems')

    
    for (let i=0; i < lista.length ; i++) {
        for (let j=0; j < productos.length; j++) {
            if (lista[i].id === productos[j].id) {


                const gridItems = document.createElement('div')
                gridItems.id = `producto-${lista[i].id}`
                gridItems.classList.add('gridItems');

                const imagen = document.createElement('img');
                imagen.src = productos[j].imagen;
                imagen.alt = productos[j].nombre;
                gridItems.appendChild(imagen)

                const itemsDetail = document.createElement('div');
                itemsDetail.classList.add('itemsDetail');
                gridItems.appendChild(itemsDetail);

                const itemsTitulo = document.createElement('h2');
                itemsTitulo.classList.add('itemsTitulo')
                itemsDetail.appendChild(itemsTitulo)

                const itemsNombre = document.createElement('p');
                itemsNombre.classList.add('itemsNombre');
                itemsNombre.textContent = productos[j].nombre
                itemsTitulo.appendChild(itemsNombre);

                const itemsPrecio = document.createElement('p');
                itemsPrecio.classList.add('itemsPrecio');
                itemsPrecio.textContent =  `Monto unitario: $${productos[j].precio}`;
                itemsTitulo.appendChild(itemsPrecio);

                const buttons = document.createElement('div');
                buttons.classList.add('buttons');
                itemsDetail.appendChild(buttons)

                
                const materialIconsQuitar = document.createElement('i');
                materialIconsQuitar.classList.add('material-icons');
                materialIconsQuitar.textContent = 'remove';
                materialIconsQuitar.setAttribute('onclick', `quitar(${productos[j].id})`)
                buttons.appendChild(materialIconsQuitar);

                const unidades = document.createElement('h3');
                unidades.classList.add('unidades');
                unidades.id = productos[j].nombre;
                unidades.textContent = lista[i].item;
                buttons.appendChild(unidades)

                const materialIconsAgregar = document.createElement('i');
                materialIconsAgregar.classList.add('material-icons');
                materialIconsAgregar.textContent = 'add';
                materialIconsAgregar.setAttribute('onclick', `agregar(${productos[j].id})`)
                buttons.appendChild(materialIconsAgregar);


                const totalItems = document.createElement('h2');
                totalItems.classList.add('totalItems');
                totalItems.id = productos[j].id
                let precio = productos[j].precio
                let items = lista[i].item
                totalItems.textContent = `Total:$ ${precio*items}`;
                itemsDetail.appendChild(totalItems);

                flexItems.appendChild(gridItems)

                        
            }
        }
    }

    }

    else {
        const flexItems = document.getElementById('flexItems')
        flexItems.textContent = "No hay nada en el carro"
    }
  }

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

    
  
    actualizar(elementoSeleccionado)
    localStorage.setItem("data", JSON.stringify(lista));
    
  
  };

function quitar(id) {
    let elementoSeleccionado = id;
    let buscar = lista.find((producto) => producto.id === elementoSeleccionado)
  
    if (buscar === undefined) return;
    else if (buscar.item === 0) return;
    else {
      buscar.item -= 1;
    }
    actualizar(elementoSeleccionado);
    lista = lista.filter((x) => x.item !== 0);
    localStorage.setItem("data", JSON.stringify(lista));
    
  };


function actualizar(id) {
    let buscar = lista.find((elemento) =>elemento.id === id);

    if (buscar.item === 0) {
      const ocultar = document.getElementById(`producto-${id}`);
      ocultar.style.display = "none";

 
      lista = lista.filter(elemento => elemento.item !== 0 )
      montoTotal()
    }

    else {
      document.getElementById(id).innerHTML = buscar.item;
    }

    if (lista.length === 0 ) {
        const flexItems = document.getElementById('flexItems')
        flexItems.textContent = "No hay nada en el carro"
        montoTotal()
    
    }

    montoItems();
    montoTotal()
    calcular();
    console.log(lista)
}

function limpiarCarro() {
    lista = [];
    crearProducto();
    localStorage.setItem("data", JSON.stringify(lista));
    calcular()
}


function calcular() {
    let numeroProductosTotal = document.getElementById('cartAmount')
    numeroProductosTotal.innerHTML = lista.map((producto) => producto.item).reduce((x, y) => x + y,0)
    
  };
  
  calcular();

function montoItems(){

    for (let i=0; i < lista.length ; i++) {
        for (let j=0; j < productos.length; j++) {
            if (lista[i].id === productos[j].id) {

                const subtotal = productos[j].precio*lista[i].item;

                const totalItems = document.getElementById(lista[i].id)
                totalItems.textContent = `Total:$ ${subtotal}`;


                const unidades = document.getElementById(productos[j].nombre)
                unidades.textContent = lista[i].item;

            }
        }
    }

}

function montoTotal() {
    // Verifica si hay elementos en la lista
    if (lista.length > 0) {
      // Calcula el monto total de los productos en la lista
      let montoTotal = 0;
  
      lista.forEach((elemento) => {
        // Extrae información del elemento
        const { item, id } = elemento;
  
        // Busca el producto correspondiente en la lista de productos
        const producto = productos.find((producto) => producto.id === id);
  
        // Si encuentra el producto, calcula el subtotal y lo suma al monto total
        if (producto) {
          const subtotal = item * producto.precio;
          montoTotal += subtotal;
        }
      });
  
      // Muestra el monto total en la consola y en el elemento HTML con ID "total"
      const elementoTotal = document.getElementById("total");
      elementoTotal.textContent = `Total: $${montoTotal}`;

    }

    if (lista.length === 0 ) {

      const elementoTotal = document.getElementById("total");
      elementoTotal.textContent = "Total: $0";

  }
  }

montoTotal()

