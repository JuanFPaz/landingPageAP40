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
  usuarioData: [],
};

window.onload = () => {
  userOn.checkOnlineStatus();
  actualizarUsuario();
  actualizarNav();
  actualizarScriptsDelDOM();
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
  const formLog = document.getElementById("formLogeo");
  const navLink = document.getElementById("navLink");

  if (userOn.estaOnline) {
    formLog.style.display = "none";
    navLink.style.display = "block";
    escribirUL(navLink);
  } else {
    formLog.style.display = "block";
    navLink.style.display = "none";
    borrarUL(navLink);
  }
}

function escribirUL(unDiv) {
  unDiv.innerHTML = `
    <ul>
      <li>Hola ${userOn.usuarioData[0].datos_personales.nombre} ${userOn.usuarioData[0].datos_personales.apellido}</li>
      <li>Cerrar Sesion</li>
    </ul>
  `;
}

function borrarUL(unDiv) {
  unDiv.innerHTML = `

  `;
}

function actualizarScriptsDelDOM() {
  if (userOn.estaOnline) {
    const script = document.createElement("script");
    script.src = "./don.js";
    document.body.appendChild(script);
  }
}

function borrarStorage(){
  localStorage.clear();
  window.location.reload();
}

/*

formLogIn = document.getElementById("formLogIn");
  formLogIn.addEventListener("submit", function (event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // Valida los elementos del formulario según tus requisitos
    if (email === "" || password === "") {
      alert("Debes ingresar tu correo electrónico y contraseña");
    } else {
        fetch('usuarios.json')
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          // Verifica si data es un array
          const usuarios = data.usuarios;
          let usuarioEncontrado = usuarios.find(usuario => usuario.email === email && usuario.contraseña === password);
          if(usuarioEncontrado){
              alert(`Bienvenido denuevo ${usuarioEncontrado.nombre} ${usuarioEncontrado.apellido}`);
              localStorage.setItem("usuarioConectado", JSON.stringify(usuarioEncontrado));
              window.location.href = "./borrador.html";
          }
          else{
            alert("Debes ingresar tu correo electrónico y contraseña");
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  });
  
  */