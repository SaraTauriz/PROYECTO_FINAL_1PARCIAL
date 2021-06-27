const form = document.getElementById('form');
const usuario = document.getElementById('username');
const apellido = document.getElementById('apellido');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const numerotelefono = document.getElementById('numerotelefono')
form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usuarioValue = usuario.value.trim();
    const apellidoValue = apellido.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	const numerotelefonoValue = numerotelefono.value.trim();

/* estas validaciones saltan cuando se deja en blanco el cuadro de usuario */
	if(usuarioValue === '') {
		setErrorFor(usuario, 'No puede dejar el usuario en blanco');
	} else {
		setSuccessFor(usuario);
	}
/* estas validaciones saltan cuando se deja en blanco el cuadro de apellido */
    if(apellidoValue === '') {
		setErrorFor(apellido, 'No puede dejar el apellido en blanco');
	} else {
		setSuccessFor(apellido);
	}
	
/* estas validaciones saltan cuando se deja en blanco el gmail y que ponga uno valido */
	if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		/* debe ingresar un gmail verdadero si no saltara error */
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}
	/* estas validaciones saltan cuando se deja en blanco el ingresar la contraseña */
	if(passwordValue === '') {
		setErrorFor(password, 'Ingrese una contraseña.');
	} else {
		setSuccessFor(password);
	}
	/* estas validaciones saltan cuando se deja en blanco el cuadro de confirmar la cotraseña y se debe poner la misma */
	if(password2Value === '') {
		setErrorFor(password2, 'Debe confirmar la contraseña');
	} else if(passwordValue !== password2Value) {
		/* cuando las contraseñas no coinciden saltara que debe poner bien las onstraseñas */
		setErrorFor(password2, 'Las contraseñas no coinciden');
	} else{
		setSuccessFor(password2);
	}
/* no se puede dejar el campo de nuemero de telefono en blanco y pedira que lo ingrese*/
	if( numerotelefonoValue === '') {
		setErrorFor(numerotelefono, 'No puede dejar este campo en blanco');
	} else {
		setSuccessFor(numerotelefono);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}
/* son las validaciones permitidas las cuales se puede ingresar */
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}