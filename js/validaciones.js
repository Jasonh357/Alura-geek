const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input, #form textarea')

const expresiones = {
	//usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, 
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    mensaje:/^[a-zA-Z0-9À-ÿ\s!"#$%&'()*+,-./:;<=>?@[\\\]^_`{|}~]{1,120}$/,// Letras, numeros, guion y guion_bajo
	/*password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.*/
}

const campos = {
    nombre: false,
    mensaje: false
};

const validarFormulario = (e) => {
    switch( e.target.name){
        case "nombre":
           validarCampo(expresiones.nombre, e.target, 'nombre')
        break;

        case "mensaje":
        validarCampo(expresiones.mensaje, e.target, 'mensaje')
        break;

    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`contacto__${campo}`).classList.remove('contacto__input-error');
        document.querySelector(`#contacto__${campo} .input__mensaje-error`).classList.remove('input__mensaje-error-activo');
        campos[campo] = true;
    }else{
        document.getElementById(`contacto__${campo}`).classList.add('contacto__input-error');

        document.querySelector(`#contacto__${campo} .input__mensaje-error`).classList.add('input__mensaje-error-activo');
        campos[campo] = false;

    }
}


inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario)
    //input.addEventListener('blur', validarFormulario)
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();

    if (campos.nombre && campos.mensaje){
        formulario.reset()

        document.getElementById('contacto__enviado').classList.add('contacto__enviado-activo');
        setTimeout(() => {
            document.getElementById('contacto__enviado').classList.remove('contacto__enviado-activo');
        }, 5000);
    }
});