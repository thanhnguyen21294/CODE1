
let count = 0;
function addJob(){
    
    var table = document.getElementById("tableList");
    var row = table.insertRow(count+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2); 
    cell1.innerHTML = count+1;
    cell2.innerHTML = document.getElementById("inputJob").value;
    cell3.innerHTML = "<button onclick='removeRow(this)'>Remove</button>"
    count++;
    
    

}

function removeRow(r){
   
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tableList").deleteRow(i);
    count--;
}
