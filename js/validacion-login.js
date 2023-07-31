const formularioLogin = document.getElementById('login__form');
const inputsLogin = document.querySelectorAll('#login__form input');

const expresionesLogin = {
    password: /^(?=.*[A-Z])(?=.*[\W_]).{4,12}$/, 
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
};


const camposLogin = {
    nombre: false,
    mensaje: false
};

const validarFormularioLogin = (e) => {
    switch( e.target.name){
        case "correo":
           validarCampoLogin(expresionesLogin.correo, e.target, 'correo')
        break;

        case "password":
        validarCampoLogin(expresionesLogin.password, e.target, 'password')
        break;

    }
}

const validarCampoLogin = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`login__${campo}`).classList.remove('login__grupo-error');
        document.querySelector(`#login__${campo} .login__mensaje-error`).classList.remove('login__mensaje-error-activo');
        camposLogin[campo] = true;
    }else{
        document.getElementById(`login__${campo}`).classList.add('login__grupo-error');

        document.querySelector(`#login__${campo} .login__mensaje-error`).classList.add('login__mensaje-error-activo');
        camposLogin[campo] = false;

    }
}


inputsLogin.forEach((input) => {
    input.addEventListener('keyup', validarFormularioLogin)
    input.addEventListener('blur', validarFormularioLogin)
});

formularioLogin.addEventListener('submit', (e) => {
    e.preventDefault();

    if (camposLogin.correo && camposLogin.password){
        formularioLogin.reset()
        window.location.href = "../screen/productos.html"



    }
});