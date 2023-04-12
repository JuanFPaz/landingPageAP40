const formulario = {
  nombre: "",
  email: "",
  telefono: "",

  validar: function () {
    for (let campo in this) {
      if (this[campo] === "") {
        return false;
      }
    }
    return true;
  },
};

const formPadre = document.getElementById("miFormulario");
const nombreInput = document.getElementById("nombre");
const emailInput = document.getElementById("email");
const telefonoInput = document.getElementById("telefono");
const alertDiv = document.getElementById("perro");

nombreInput.addEventListener("input", function () {
  formulario.nombre = nombreInput.value;
});

emailInput.addEventListener("input", function () {
  formulario.email = emailInput.value;
});

telefonoInput.addEventListener("input", function () {
  formulario.telefono = telefonoInput.value;
});

formPadre.addEventListener("submit", function (event) {
  if (!formulario.validar()) {
    event.preventDefault();
    alertDiv.innerHTML = `                   
        <div class="alert alert-danger">
        <strong>Danger!</strong> This alert box could indicate a dangerous or potentially negative action.
        </div>
     `;
  } else {
    event.preventDefault();
    alertDiv.innerHTML = `                   
            <div class="alert alert-success">
                <strong>Success!</strong> Indicates a successful or positive action.
            </div>
         `;
  }
});