const signIn = document.getElementById("sign-In");
const logIn = document.getElementById("log-In")
const modalContenido = document.getElementById("contenido");
const modalCerrado = document.getElementById("myModal")
let formSignIn = null; // Variable global que guardará el formulario
let formLogIn = null; // Variable global que guardará el formulario


function crearFormularioInicioSesion() {
    modalContenido.innerHTML = `
    <form id='formLogIn'>
        <div class="row m-4 p-12">
            <div class="col-12">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="Ingrese su email" name="email">
            </div>
        </div>
        <div class="row m-4 p-12">
            <div class="col-12">
                <label for="password" class="form-label">Contraseña:</label>
                <input type="password" class="form-control" id="password" placeholder="Ingrese su contraseña" name="password" value="" autocomplete="off">
            </div>
        </div>
        <div class="row m-4">                            
            <div class="col-12">
                <button type="submit" class="btn btn-primary">
                    Iniciar sesion.
                </button>
            </div>
        </div>
    </form>
    <div class="footer">
        <div class="row mt-4 pt-4" >
            <ul>
                <ol class="m-4">                                
                    <button type="button" class="btn btn-primary">
                        Conectarse con Facebook
                    </button>
                </ol>
                <ol class="m-4">                                
                    <button type="button" class="btn btn-primary">
                        Conectase con Google
                    </button>
                </ol>
            </ul>
        </div>
    </div>
    </form>
    `;
    formLogIn = document.getElementById('formLogIn');
    formLogIn.addEventListener('submit', function(event) {
      event.preventDefault();
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      // Valida los elementos del formulario según tus requisitos
      if (email === '' || password === '') {
        alert('Debes ingresar tu correo electrónico y contraseña');
      } else {
        alert("hola!");
      }
    });
  }

function crearFormularioRegistroCuenta() {
    modalContenido.innerHTML = `
    <form id='formSignIn'>
        <div class="row m-4">
            <div class="col-6">
                <label for="nombre" class="form-label">Nombre:</label>
                <input type="text" class="form-control" id="nombre" placeholder="Ingrese un nombre" name="nombre">
            </div>
            <div class="col-6">
                <label for="apellido" class="form-label">Apellido:</label>
                <input type="text" class="form-control" id="apellido" placeholder="Ingrese un nombre" name="apellido">
            </div>
        </div>
        <div class="row m-4 p-12">
            <div class="col-12">
                <label for="email" class="form-label">Email:</label>
                <input type="email" class="form-control" id="email" placeholder="Ingrese un email" name="email">
            </div>
        </div>
        <div class="row m-4 p-12">
            <div class="col-12">
                <label for="password" class="form-label">Contraseña:</label>
                <input type="password" class="form-control" id="password" placeholder="Ingrese un email" name="password">
            </div>
        </div>
        <div class="row m-4 p-12">
            <div class="col-12">
                <label for="password2" class="form-label">Repite contraseña:</label>
                <input type="password" class="form-control" id="password2" placeholder="Ingrese un email" name="password2">
            </div>
        </div>

        <div class="row m-4">                            
            <div class="col-12">
                <button type="submit" class="btn btn-primary">
                    Registarse
                </button>
            </div>
        </div>
    </form>
    <div class="footer">
        <div class="row mt-4 pt-4" >
            <ul>
                <ol class="m-4">                                
                    <button type="button" class="btn btn-primary">
                        Registarse con Facebook
                    </button>
                </ol>
                <ol class="m-4">                                
                    <button type="button" class="btn btn-primary">
                        Registarse con Google
                    </button>
                </ol>
            </ul>
        </div>
    </div>
    `;
    formSignIn = document.getElementById('formSignIn');
    formSignIn.addEventListener('submit', function(event) {
      event.preventDefault();
      const nombre = document.getElementById('nombre').value;
      const apellido = document.getElementById('apellido').value;
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
      const repeatPassword = document.getElementById('password2').value;
      // Valida los elementos del formulario según tus requisitos
      if (nombre === '' || apellido === '' || email === '' || password === '' || repeatPassword === '' || password !== repeatPassword) {
        alert('Debes completar todos los campos y asegurarte de que las contraseñas coincidan');
      } else {
        // Envía el formulario a través de la acción correspondiente o realiza otra acción de tu elección
        formSignIn.submit();
      }
    });
  }
signIn.addEventListener("click", function(event) {
    event.preventDefault();
    crearFormularioRegistroCuenta();
});
logIn.addEventListener("click", function(event){
    event.preventDefault();
    crearFormularioInicioSesion();
  })
modalCerrado.addEventListener("hidden.bs.modal",function(){
    console.log("Modal cerrado");
})

