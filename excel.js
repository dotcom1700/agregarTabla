var rInd =0;
myFunction = function () {
    input1    = document.getElementById('inputone');
    Value1    = input1.value;
    input2    = document.getElementById('inputtwo');
    Value2    = input2.value;
    input3    = document.getElementById('inputthree');
    Value3    = input3.value;
    R         = document.getElementById("table").rows.length;
    one       = 1;
    I         = R + one;
var table     = document.getElementById("table");
var x         = table.insertRow(R);
    x.onclick = function(e){
         rInd = this.rowIndex;  
         var value = [];
        for(var i=0;i<3;i++){
         var cell0 = x.cells[i];
         var inp1 = cell0.getElementsByTagName('input');
            value.push(inp1[0].value);
        }    
         document.getElementById('inputone').value = value[0];   
        document.getElementById('inputtwo').value = value[1];
        document.getElementById('inputthree').value = value[2];
    }
x.insertCell(0).innerHTML = "<input type='text' value='" + Value3 + "' name='" + I + "'>";
x.insertCell(0).innerHTML = "<input type='text' value='" + Value2 + "' name='" + I + "'>";
x.insertCell(0).innerHTML = "<input type='text' value='" + Value1 + "' name='" + I + "'>";
} //end myFunction

deleteTr = function (rowIndx) {
document.getElementById('table').deleteRow(rInd);
}

console.log(one);