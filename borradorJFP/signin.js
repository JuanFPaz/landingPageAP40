console.log("Hola soy sigin, un gusto conocerte juan paz")
formSignIn = document.getElementById("formSignIn");
formSignIn.addEventListener("submit", function (event) {
  event.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const repeatPassword = document.getElementById("password2").value;
  console.log(password);
  // Valida los elementos del formulario según tus requisitos
  if (
    nombre === "" ||
    apellido === "" ||
    email === "" ||
    password === "" ||
    repeatPassword === "" ||
    password !== repeatPassword
  ) {
    alert(
      "Debes completar todos los campos y asegurarte de que las contraseñas coincidan"
    );
  } else {
    // Envía el formulario a través de la acción correspondiente o realiza otra acción de tu elección
  }
});