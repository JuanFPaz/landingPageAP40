let userOn = {
    estaOnline: false,
    checkOnlineStatus: () => {
      if (localStorage.getItem("isOnline") === "true") {
        userOn.estaOnline = true;
        console.log("Usuario conectado");
      } else {
        userOn.estaOnline = false;
        console.log("Usuario desconectado");
      }
    },
    usuarioData: []
  };
  window.onload = () => {
    userOn.checkOnlineStatus();
    actualizarUsuario();
    actualizarNav();
  };
  function cerrarSesion() {
    localStorage.setItem("isOnline", false);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  }
  
  function actualizarUsuario() {
    if (userOn.estaOnline) {
      userOn.usuarioData.push(JSON.parse(localStorage.getItem("userData")));
    } else {
      userOn.usuarioData.push(localStorage.setItem("userData", ""));
    }
  }
  
  function actualizarNav() {
    const navContenedor = document.querySelector(".navContenedor");
  
    if (userOn.estaOnline) {
        navContenedor.innerHTML = `
            <ul class="menu-principal">
                <li><a href="./index.html" class="navegacion__enlace">Inicio</a></li>
                <li><a href="./nosotros.html" class="navegacion__enlace">Nosotros</a></li>
                <li><a href="./viandas.html" class="navegacion__enlace">Viandas</a></li>
                <li><a href="./contacto.html" class="navegacion__enlace">Contacto</a></li>
                <li class="dropdown"><a href="#" class="navegacion__enlace dropdown-toggle"  role="button" data-bs-toggle="dropdown">Hola ${userOn.usuarioData[0].datos_personales.nombre }</a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" id="log-out">Cerrar Sesion</a></li>
                    </ul>
                </li>
            </ul>
            `;
        const scriptDOM = document.createElement("script");
        scriptDOM.src = "./src/userAction.js"
        document.body.appendChild(scriptDOM);
    } else {
        navContenedor.innerHTML = `
                <ul class="menu-principal">
                    <li><a href="./index.html" class="navegacion__enlace">Inicio</a></li>
                    <li><a href="./nosotros.html" class="navegacion__enlace">Nosotros</a></li>
                    <li><a href="./viandas.html" class="navegacion__enlace">Viandas</a></li>
                    <li><a href="./contacto.html" class="navegacion__enlace">Contacto</a></li>
                    <li><a href="#" class="navegacion__enlace" data-bs-toggle="modal" data-bs-target="#myModal" id="log-In">Log in</a></li>
                    <li><a href="#" class="navegacion__enlace" data-bs-toggle="modal" data-bs-target="#myModal" id="sign-In">Sign in</a></li>
                </ul>
            `;
        const scriptDOM = document.createElement("script");
        scriptDOM.src = "./src/formControl.js"
        document.body.appendChild(scriptDOM);
    }
  }
  
  function borrarStorage(){
    localStorage.clear();
    window.location.reload();
  }