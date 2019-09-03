
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

function keyPressUp(){
    if (event.key == "Enter") {
        
    
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
}

function removeRow(r){
   
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("tableList").deleteRow(i);
    count--;
}

var userNamePool = [];
var passWordPool = [];
function submitReg(){
    if (document.getElementById("userReg").value.length == 0 || document.getElementById("passReg").value.length == 0) {
        alert("Try again!");
    
   
}   else{
    userNamePool.push(document.getElementById("userReg").value);
    passWordPool.push(document.getElementById("passReg").value);
    alert("Registered success!")
    }
}
// console.log(userNamePool);
// console.log(passWordPool);



function userEnterReg(){
    if (event.key == "Enter") {
        
    
    if (document.getElementById("userReg").value.length == 0) {
        alert("Username register required!");
    } else if (document.getElementById("passReg").value.length == 0) {
        alert("Password register required!");
    } else{
        userNamePool.push(document.getElementById("userReg").value);
        passWordPool.push(document.getElementById("passReg").value);
        alert("Registered success!")
        }
    }
}

function passEnterReg(){
    if (event.key == "Enter") {
        
    
    if (document.getElementById("userReg").value.length == 0) {
        alert("Username register required!");
    } else if (document.getElementById("passReg").value.length == 0) {
        alert("Password register required!");
    } else{
        userNamePool.push(document.getElementById("userReg").value);
        passWordPool.push(document.getElementById("passReg").value);
        alert("Registered success!")
        }
    }
}



function submitLog(){
    let userName = document.getElementById("userLog").value;
    let passWord = document.getElementById("passLog").value;
    if (userNamePool.includes(userName) && passWordPool.includes(passWord)) {
        alert("Login success!");
    }else{
        alert("Username or password not match. Try again!");
    }
}


function userEnterLog(){
    
       
    let userName = document.getElementById("userLog").value;
    let passWord = document.getElementById("passLog").value;
    if (event.key == "Enter") {
        if (userNamePool.includes(userName) && passWordPool.includes(passWord)) {
            alert("Login success!");
        }else{
            alert("Username or password not match. Try again!");
        }
    }
}

function passEnterLog(){
    
    
    let userName = document.getElementById("userLog").value;
    let passWord = document.getElementById("passLog").value;
    if (event.key == "Enter") {
        if (userNamePool.includes(userName) && passWordPool.includes(passWord)) {
            alert("Login success!");
        }else{
            alert("Username or password not match. Try again!");
        }
    }
}