console.log("Hola!, vamos a programar el login como hicimos antes!");

/*Forma diferente de mandar un formulario*/
const formulario = document.getElementById("formLogIn");
const botonSubmit = document.getElementById("boton-submit");
botonSubmit.addEventListener("click", (event) => {
    event.preventDefault()
    validarInicioSesion();
});
formulario.addEventListener("submit", validarInicioSesion);


function validarInicioSesion(){
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
  if(!validarLogeo(email,pass)){
    alert("Rellene todo el formulario, conchesumadre");
  }else{
    obtenerDatos(email,pass);
  }
}

function validarLogeo(unEmail,unaPass){
  return unEmail && unaPass;
}

function obtenerDatos(unEmail,unaPass){
    fetch('./usuarios.json')
    .then(response => response.json())
    .then(data => {
        let usuarioEncontrado = data.usuarios.find(user => user.email == unEmail);
        if(usuarioEncontrado && usuarioEncontrado.contraseña === unaPass){
            alert(`Hola! ${usuarioEncontrado.datos_personales.nombre} ${usuarioEncontrado.datos_personales.apellido}`);
            let usuarioStringfeado = JSON.stringify(usuarioEncontrado);
            localStorage.setItem("isOnline", true);
            localStorage.setItem("userData", usuarioStringfeado);
            setTimeout(() => {
              window.location.reload();
            }, 2000);
        } else {
            alert("Su contraseña o correo electronico, son incorrectos!");
        }
    });
}