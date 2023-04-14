const logOut = document.getElementById("log-out");

logOut.addEventListener("click", function (event){
    event.preventDefault();
    cerrarSesion();
})

function cerrarSesion(){
    alert("Cerrando sesion...");
    localStorage.setItem("isOnline", false);
    setTimeout(() => {
        window.location.reload();
      }, 2000);
}