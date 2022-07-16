function insertarDatos() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let edad = document.getElementById("edad").value;
    document.getElementById("insertionPoint").innerHTML 
    += "<tr><td>" + nombre + "</td><td>" + apellido 
    + "</td><td>" + edad + "</td></tr>";

    document.getElementById("nombre").value = "";
    document.getElementById("apellido").value = "";
    document.getElementById("edad").value = "";
    guardarDatos(nombre, apellido, edad);
}
let arreglo = [];
function guardarDatos(nombre,apellido,edad){
    datos = {
        nombre: nombre,
        apellido: apellido,
        edad: edad,
    }
    arreglo.push(datos);
}