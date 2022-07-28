var indiceFila = 0;
function insertarDatos() {
    nombre   = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;
    edad     = document.getElementById("edad").value;
    getTable = document.getElementById("table").rows.lenght;
    row = getTable + 1;

    var table         = document.getElementById("table");
    var insertRow     = table.insertRow(getTable)
    insertRow.onclick = function (e) {
        indiceFila    = this.rowIndex;
        var datos     = [];
        for (let i = 0; i < 3; i++) {
            var celda = insertRow.cells[i];
            var inp   = celda.getElementbyTagName('input');
            datos.push(inp[0].value);
        }
        nombre   = value[0];
        apellido = value[1];
        edad     = value[2];
    }
    insertRow.insertCell(0).innerHTML = "<input type='text' value='" + edad + "' name='" + row + "'>";
    insertRow.insertCell(0).innerHTML = "<input type='text' value='" + apellido + "' name='" + row + "'>";
    insertRow.insertCell(0).innerHTML = "<input type='text' value='" + nombre + "' name='" + row + "'>";
}
borrarDatos = function (rowIndx) {
    document.getElementById('table').deleteRow(indiceFila);
}
