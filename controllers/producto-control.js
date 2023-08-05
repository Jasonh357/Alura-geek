import {productoServicios} from "../server/producto-server.js";



const crearNuevalinea = (imagen,nombre,precio,) => {
    const linea = document.createElement("div")
    
    const contenido = `
    <div class="productos__disponibles">
        <img class="productos__eliminar" src="../assets/img/delete_black_24dp (1) 1.svg" alt="Eliminar">
        <img class="productos__editar" src="../assets/img/edit_black_24dp 1.svg" alt="">
        <img class="productos__img" src="${imagen}" alt="">
        <p class="productos__nombre">${nombre}</p>
        <p class="productos__precio">${precio}</p>
        
    </div>
`;
    linea.innerHTML = contenido;
    return linea;
};

const producto = document.querySelector("[data-producto]")

productoServicios.listaProductos().then((data) => {
  console.log(data)  
  data.forEach((perfil) => {
        console.log(perfil)
        const nuevaLinea = crearNuevalinea(perfil.imagen,perfil.categoria,perfil.nombre,perfil.precio,perfil.descripcion) 
       producto.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrio un erro"));

