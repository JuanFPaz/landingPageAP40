function datosOfJson(){
    return fetch('./usuarios.json')
    .then(response => response.json())
    .then(data => {
        return data.usuarios;
    })
}