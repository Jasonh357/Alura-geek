const listaProductos = () => fetch("http://localhost:3000/productos").then((respuesta) => respuesta.json());

const crearProducto = (imagen, categoria, nombre, precio, descripcion) => {
    console.log(imagen, categoria, nombre, precio, descripcion)
   
    return fetch("http://localhost:3000/productos", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ imagen,categoria, nombre, precio, descripcion, id: uuid.v4()})
      
    });

    
}

export const productoServicios = {
    listaProductos,
    crearProducto
}
 //categoria, nombre, precio, descripcion,categoria, nombre, precio, descripcion