import { productoServicios } from "../server/producto-server.js";

//const formulario = document.querySelector("[data-form]");

const formulario = document.getElementById('nuevo__producto-form');
const inputs = document.querySelectorAll('#nuevo__producto-form input, #nuevo__producto-form textarea')


formulario.addEventListener("submit", (evento) =>{
    
    const imagen = document.getElementById('url').value;
    const categoria = document.getElementById('categoria').value;
     const nombre = document.getElementById('nombre').value;
    const precio = document.getElementById('precio').value;
    const descripcion = document.getElementById('descripcion').value;

    productoServicios.crearProducto( imagen,categoria, nombre, precio, descripcion ).then((respuesta) =>{
        console.log(respuesta)
    })
    .catch((error) => console.log(error))

}); 
//, nombre, precio, descripcion