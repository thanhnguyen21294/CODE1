var dsMonChinh = [];
// var dsMonTrangMieng = [];
let monChinh1 = {
    ten: "Cơm",
    soluong: 10,
    dongia: 30000,
    tonggia: 300000
}

dsMonChinh.push(monChinh1);

for (let index = 0; index < dsMonChinh.length; index++) {
    

let count = 0;
var table = document.getElementById("tableRestaurant");
var row = table.insertRow(count + 1); 
var cell1 = row.insertCell(0);
var cell2 = row.insertCell(1);
var cell3 = row.insertCell(2);
var cell4 = row.insertCell(3);
cell1.innerHTML = dsMonChinh[count].ten;
cell2.innerHTML = dsMonChinh[count].soluong;
cell3.innerHTML = dsMonChinh[count].dongia;
cell4.innerHTML = dsMonChinh[count].tonggia;
count++;
}

let monChinh2 = {
    ten: "Phở",
    soluong: 20,
    dongia: 30000,
    tonggia: 600000
}
dsMonChinh.push(monChinh2);

function themMon(tenmonmoi,ten, soluong, dongia, tonggia){
    tenmonmoi.ten = ten;
    tenmonmoi.soluong = soluong;
    tenmonmoi.dongia = dongia;
    tenmonmoi.tonggia = tonggia;
}


