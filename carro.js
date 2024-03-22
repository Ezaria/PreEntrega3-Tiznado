let lista = JSON.parse(localStorage.getItem('data')) || [];




  function crearProducto() {

    if (lista != 0) {


    const flexItems = document.getElementById('flexItems')

    
    for (let i=0; i < lista.length ; i++) {
        for (let j=0; j < productos.length; j++) {
            if (lista[i].id === productos[j].id) {


                const gridItems = document.createElement('div')
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
                itemsPrecio.textContent = productos[j].precio;
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
                unidades.id = productos[j].id
                unidades.textContent = lista[i].item;
                buttons.appendChild(unidades)

                const materialIconsAgregar = document.createElement('i');
                materialIconsAgregar.classList.add('material-icons');
                materialIconsAgregar.textContent = 'add';
                materialIconsAgregar.setAttribute('onclick', `agregar(${productos[j].id})`)
                buttons.appendChild(materialIconsAgregar);


                const totalItems = document.createElement('h2');
                totalItems.classList.add('totalItems');
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
  
    calcular();
    actualizar(elementoSeleccionado)
    localStorage.setItem("data", JSON.stringify(lista));
    crearProducto();
  
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
    crearProducto();
  };


function actualizar(id) {
    let buscar = lista.find((elemento) =>elemento.id === id);
    document.getElementById(id).innerHTML = buscar.item;

    calcular();
}


  function calcular() {
    let numeroProductosTotal = document.getElementById('cartAmount')
    numeroProductosTotal.innerHTML = lista.map((producto) => producto.item).reduce((x, y) => x + y,0)
    
  };
  
  calcular();