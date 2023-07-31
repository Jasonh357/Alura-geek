const formularioProducto = document.getElementById('nuevo__producto-form');
const inputsProductos = document.querySelectorAll('#nuevo__producto-form input, #nuevo__producto-form textarea');

const expresionesProductos = {
    categoria:/^.{1,20}$/,
    nombre:/^.{1,20}$/,
    precio:/^(\$)?\d{1,3}(,\d{3})*(\.\d{2})?$/,
    descripcion:/^.{1,150}$/,
    url:/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/

    
};


const camposProductos = {
    categoria: false,
    nombre: false,
    precio: false,
    descripcion: false,
    url: false
}

const validarFormularioProducto = (e) => {
    switch (e.target.name) {
        case "categoria":
            validarCampoProductos(expresionesProductos.categoria, e.target, 'categoria');
        break;
        
        case "nombre":
            validarCampoProductos(expresionesProductos.nombre, e.target, 'nombre');
        break;

        case "precio":
            validarCampoProductos(expresionesProductos.precio, e.target, 'precio');
        break;

        case "descripcion":
            validarCampoProductos(expresionesProductos.descripcion, e.target, 'descripcion');
        break;

        case "url":
            validarCampoProductos(expresionesProductos.url, e.target, 'url');
        break;
    }
}

const validarCampoProductos = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`input__${campo}`).classList.remove('nuevo__grupo-error');
        document.querySelector(`#input__${campo} .nuevo__producto-mensaje-error`).classList.remove('nuevo__producto-mensaje-error-activo');
        camposProductos[campo] = true;
        
    }else{
        document.getElementById(`input__${campo}`).classList.add('nuevo__grupo-error');
        document.querySelector(`#input__${campo} .nuevo__producto-mensaje-error`).classList.add('nuevo__producto-mensaje-error-activo')
        camposProductos[campo] = false;
    }
}

inputsProductos.forEach((input) => {
    input.addEventListener('keyup', validarFormularioProducto )
    input.addEventListener('blur', validarFormularioProducto)
})

formularioProducto.addEventListener('submit', (e) => {
    e.preventDefault();

    if (camposProductos.categoria && camposProductos.nombre && camposProductos.precio && camposProductos.descripcion && camposProductos.url) {
        formularioProducto.reset()
    };

    
});