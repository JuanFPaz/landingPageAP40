const signIn = document.getElementById("sign-In");
const logIn = document.getElementById("log-In");
const modalContenido = document.getElementById("contenido");
const modalCerrado = document.getElementById("myModal");

signIn.addEventListener("click", function (event) {
  event.preventDefault();
  crearFormularioRegistroCuenta();
});
logIn.addEventListener("click", function (event) {
  event.preventDefault();
  crearFormularioInicioSesion();
});
modalCerrado.addEventListener("hidden.bs.modal", function () {
  console.log("Modal cerrado");
});

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
                <input type="password" class="form-control" id="password" placeholder="Ingrese su contraseña" name="password">
            </div>
        </div>
        <div class="row m-4">                            
            <div class="col-12">
                <button type="submit" id="boton-submit" class="btn btn-outline-success w-100 d-block d-md-inline text-verde">
                    Iniciar sesion
                </button>
            </div>
        </div>
    </form>
    <div class="footer">
        <div class="row mt-4 pt-4" >
            <ul>
                <ol class="m-4">                                
                    <button type="button" class="btn btn-outline-success w-100 d-block d-md-inline text-verde">
                        Registarse con Facebook
                    </button>
                </ol>
                <ol class="m-4">                                
                    <button type="button" class="btn btn-outline-success w-100 d-block d-md-inline text-verde">
                        Registarse con Google
                    </button>
                </ol>
            </ul>
        </div>
    </div>
    `;
    const scriptDOM = document.createElement("script");
    scriptDOM.src = "./src/login.js";
    modalContenido.appendChild(scriptDOM);
  }

function crearFormularioRegistroCuenta() {
  modalContenido.innerHTML = `
  <form id='formSignIn'>
  <div class="row m-4">
      <div class="col-6">
          <label for="nombre" class="form-label">Nombre:</label>
          <input type="text" class="form-control" id="nombre" placeholder="Ingrese su nombre" name="nombre">
      </div>
      <div class="col-6">
          <label for="apellido" class="form-label">Apellido:</label>
          <input type="text" class="form-control" id="apellido" placeholder="Ingrese su apellido" name="apellido">
      </div>
  </div>
  <div class="row m-4 p-12">
      <div class="col-12">
          <label for="celular" class="form-label">Telefono:</label>
          <input type="tel" class="form-control"  id="celular" placeholder="Ingrese un numero de celular" name="celular">
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
          <input type="password" class="form-control" id="password" placeholder="Ingrese una contraseña"
              name="password">
      </div>
  </div>
  <div class="row m-4 p-12">
      <div class="col-12">
          <label for="password2" class="form-label">Repita contraseña:</label>
          <input type="password" class="form-control" id="password2" placeholder="Repita la contraseña"
              name="password2">
      </div>
  </div>

  <div class="row m-4">
      <div class="col-12">
          <button type="submit" id="boton-submit" class="btn btn-outline-success w-100 d-block d-md-inline text-verde">
              Registarse
          </button>
      </div>
  </div>
</form>
<div class="footer">
  <div class="row mt-4 pt-4">
      <ul>
          <ol class="m-4">
              <button type="button" class="btn btn-outline-success w-100 d-block d-md-inline text-verde">
                  Registarse con Facebook
              </button>
          </ol>
          <ol class="m-4">
              <button type="button" class="btn btn-outline-success w-100 d-block d-md-inline text-verde">
                  Registarse con Google
              </button>
          </ol>
      </ul>
  </div>
</div>
    `;
    const scriptDOM = document.createElement("script");
    scriptDOM.src = "./src/signin.js";
    modalContenido.appendChild(scriptDOM);
}