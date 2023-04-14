console.log("Hola, yo vengo a controlar la validacion del userNew");
let userNew = {
    esNuevoUser: false,
    checkNuevoUser: () => {
        if (localStorage.getItem("isUserNew") === "true") {
            userOn.estaOnline = true;
            console.log("Usuario conectado");
          } else {
            userOn.estaOnline = false;
            console.log("Usuario desconectado");
          }
    }
}