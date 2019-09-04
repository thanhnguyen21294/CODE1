var dsMonChinh = [];
// var dsMonTrangMieng = [];
let monChinh1 = {
    ten: "Cơm",
    soluong: 10,
    dongia: 30000,
    tonggia: 300000
}

let monChinh2 = {
    ten: "Phở",
    soluong: 20,
    dongia: 30000,
    tonggia: 600000
}

let monChinh3 = {
    ten: "Bánh mỳ",
    soluong: 50,
    dongia: 20000,
    tonggia: 1000000
}



dsMonChinh.push(monChinh1,monChinh2,monChinh3);




for (let index = 0; index < dsMonChinh.length; index++) {
    var table = document.getElementById("tableRestaurant");
    var row = table.insertRow(index + 1); 
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    cell1.innerHTML = dsMonChinh[index].ten;
    cell2.innerHTML = dsMonChinh[index].soluong;
    cell3.innerHTML = dsMonChinh[index].dongia;
    cell4.innerHTML = dsMonChinh[index].tonggia;
}
    


function updateFood(tenmonmoi, soluong, dongia){
    tenmonmoi.ten = tenmonmoi;
    tenmonmoi.soluong = soluong;
    tenmonmoi.dongia = dongia;
    tenmonmoi.tonggia = soluong*dongia;
}

function addFood(tenmonmoi, soluong, dongia){
    document.getElementById("newFood").value = tenmonmoi;
    document.getElementById("newAmount").value = soluong;
    document.getElementById("newPrice").value = dongia;
    updateFood(tenmonmoi, soluong, dongia)
    
    dsMonChinh.push(tenmonmoi);
    
}

