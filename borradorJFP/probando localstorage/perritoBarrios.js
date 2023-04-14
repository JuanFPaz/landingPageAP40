/*Forma diferente de mandar un formulario*/
const formulario = document.getElementById("formControl");
const botonSubmit = document.getElementById("boton-submit");

botonSubmit.addEventListener("click", (evento) => {
  evento.preventDefault(); // Evita que el formulario se envíe automáticamente
  validarInicioSesion(); // Valida los campos del formulario
});
formulario.addEventListener("submit", validarInicioSesion);


function validarInicioSesion(){
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;
  const div = document.getElementById("uwu");

  if(email && pass){
    fetch('./usuarios.json')
    .then(response => response.json())
    .then(data => {
      const usuarios = data.usuarios;
      console.log(usuarios[0]);
      for(i=0; i < usuarios.length; ++i){
        if(usuarios[i].email === email && usuarios[i].contraseña === pass){
          div.innerHTML = `Hola! ${usuarios[i].datos_personales.nombre} ${usuarios[i].datos_personales.apellido}`;
          localStorage.setItem("isOnline", true);
          let usuarioStringfeado = JSON.stringify(usuarios[i]);
          localStorage.setItem("userData", usuarioStringfeado);
          setTimeout(() => {
            window.location.reload();
          }, 2000);
          break; //salimos del ciclo for porque ya encontramos una coincidencia
        } else if (usuarios[i].email !== email && usuarios[i].contraseña === pass || usuarios[i].email === email && usuarios[i].contraseña !== pass){
          div.innerHTML = `usuario o contraseña incorrecto`;
          break;
        }
      }
    });
  }else{
    div.innerHTML= `
      Rellene los campos porfavor!
    `;
  }
}