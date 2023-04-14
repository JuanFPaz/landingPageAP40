console.log("Hola soy sigin, un gusto conocerte juan paz");
const formulario = document.getElementById("formSignIn");
const botonSubmit = document.getElementById("boton-submit");
botonSubmit.addEventListener("click", (event) => {
    event.preventDefault()
    validarRegistro();
});

formulario.addEventListener("submit", validarRegistro);

function validarRegistro() {
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const celular = document.getElementById('celular').value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const repeatPassword = document.getElementById("password2").value;
  
  if(nombre === "" || apellido === "" || celular === "" || email === "" || password === "" || repeatPassword === "") {
    alert("Por favor, completa todos los campos.");
    return false;
  } 

  if(password !== repeatPassword) {
    alert("Las contraseñas no coinciden.");
    return false;
  }
  
  if(!validarTelefono(celular)) {
    alert("Por favor, ingresa un número de teléfono válido.");
    return false;
  }
  
  if(!validarEmail(email)) {
    alert("Por favor, ingresa un correo electrónico válido.");
    return false;
  }
  obtenerDatos(email, celular, function(x){
    if(x){
      alert("Ya existe un usuario con ese correo electrónico o número de teléfono.");
    } else {
      let userNewStingfeado = JSON.stringify(guardarNuevoUser(celular,email,password,nombre,apellido))
      localStorage.setItem("isUserNew", true);
      localStorage.setItem("userNewData", userNewStingfeado);
      const scriptDOM = document.createElement("script");
      scriptDOM.src = "./src/userNewControl.js";
      divFormularios.appendChild(scriptDOM);
    }
  });
}

function validarTelefono(numero) {
  let regex = /^\d{10}$/; // Expresión regular para 10 dígitos numéricos
  return regex.test(numero);
}

function validarEmail(email) {
  let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/; // Expresión regular para que solo acepte correos electronicos con el @ y cualquier dominio de email.
  return validEmail.test(email);
}

/*Primero vamos a validar si ya hay un usuario registrado con EMAIL o CELULAR*/
function obtenerDatos(unEmail, unCelular,callback){
  fetch('./src/resource/usuarios.json')
  .then(response => response.json())
  .then(data => {
    let usuarioEncontrado = data.usuarios.find(user => user.email == unEmail || user.telefono == "+54"+unCelular)
    if(usuarioEncontrado){
      callback(true);
    }else{
      callback(false);
    }
  });
}

function establecerIDNewUser(){
  fetch('./src/resource/usuarios.json')
  .then(response => response.json())
  .then(data => {
    let cantidadDeUsuariosCreados = data.usuarios.length;
    userNew.userNewData.id=`USR00${cantidadDeUsuariosCreados+1}`;
    console.log(userNew.userNewData.id)
  })
}
function guardarNuevoUser(unCelular,unEmail,unaPass,unNombre,unApellido){
  return {
    id:"",
    telefono:`+54${unCelular}`,
    email:unEmail,
    contraseña:unaPass,
    datos_personales:{
      nombre: unNombre,
      apellido:unApellido,
      direccion: "",
      edad: 0
    }
  }
}