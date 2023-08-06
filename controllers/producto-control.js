import {productoServicios} from "../server/producto-server.js";



const crearNuevalinea = (imagen,categoria,nombre,precio,descripcion, id) => {
    const linea = document.createElement("div")
    
    const contenido = `
    <div class="productos__disponibles">
        <img class="productos__eliminar" src="../assets/img/delete_black_24dp (1) 1.svg" alt="Eliminar" id="${id}">
        <a href="./editar-producto.html?id=${id}">
        <img class="productos__editar" src="../assets/img/edit_black_24dp 1.svg" alt="">
       </a>
        <img class="productos__img" src="${imagen}" alt="">
        <p class="productos__nombre">${nombre}</p>
        <p class="productos__precio">${precio}</p>
       
        
    </div>
`;
    linea.innerHTML = contenido;
    const btn = linea.querySelector("img")
   btn.addEventListener("click", () => {
   
const id = btn.id
    productoServicios.eliminarProducto(id).then( respuesta => {
        
    }).catch(err => alert("ocurrio un error"))
   })
    return linea;
};

const producto = document.querySelector("[data-producto]")

productoServicios
    .listaProductos()
    .then((data) => {
        data.forEach(({imagen, categoria, nombre, precio, descripcion, id}) => {
        const nuevaLinea = crearNuevalinea(imagen, categoria, nombre, precio, descripcion, id) 
       producto.appendChild(nuevaLinea);
    });
}).catch((error) => alert("Ocurrio un erro"));

