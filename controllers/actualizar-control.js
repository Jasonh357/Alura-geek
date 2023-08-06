import { productoServicios } from "../server/producto-server.js";
import { validarCampoProductos } from "../js/validacion-nuevo.js";

const formulario = document.querySelector('[data-form]')

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    

    
 const imagen = document.querySelector("[data-url]");
    const categoria = document.querySelector("[data-categoria]");
     const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");
    const perfil = await productoServicios.detalleProducto(id)
    imagen.value = perfil.imagen;
    categoria.value = perfil.categoria;
    nombre.value = perfil.nombre;
    precio.value = perfil.precio;
    descripcion.value = perfil.descripcion;

};


obtenerInformacion();

/*formulario.addEventListener('submit', (evento) => {
    evento.preventDefault()
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imagen = document.querySelector("[data-url]").value
    const categoria = document.querySelector("[data-categoria]").value
     const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    const descripcion = document.querySelector("[data-descripcion]").value
    console.log(imagen,categoria,nombre,precio,descripcion)

    productoServicios.actualizarProducto(imagen,categoria,nombre,precio,descripcion,id).then(() =>  {
        window.location.href = "/screen/productos.html"
         
    })

    
})*/

formulario.addEventListener('submit', async (evento) => {
    evento.preventDefault();

    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imagen = document.querySelector("[data-url]").value;
    const categoria = document.querySelector("[data-categoria]").value;
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;

    // Validación de campos vacíos
    if (!imagen || !categoria || !nombre || !precio || !descripcion) {
        alert("Por favor, completa todos los campos antes de enviar el formulario.");
        return; // Detiene el envío del formulario
    }

    // Si todos los campos están completos, continuamos con el envío del formulario
    try {
        await productoServicios.actualizarProducto(imagen, categoria, nombre, precio, descripcion, id);
        window.location.href = "/screen/productos.html";
    } catch (error) {
        // Manejo del error en caso de fallo en la actualización del producto
        console.error("Error al actualizar el producto:", error);
    }
});
