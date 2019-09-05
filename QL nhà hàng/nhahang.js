var dsMonChinh = [];
var dsMonChinhThemMoi = [];

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





    

function thongtinMon(){
    return {
        ten: '',
        soluong: 0,
        dongia: 0,
        tonggia: 0
    }
}
function updateFood(food,tenMoi, soluong, dongia){
    food.ten = tenMoi;
    food.soluong = soluong;
    food.dongia = dongia;
    food.tonggia = soluong*dongia;
}



function addFood(){
    let newFood = thongtinMon();
    let tenmonmoi = document.getElementById("newFood").value ;
    let soluong = document.getElementById("newAmount").value ;
    let dongia = document.getElementById("newPrice").value ;
    updateFood(newFood,tenmonmoi, soluong, dongia);
    dsMonChinhThemMoi.push(newFood);
    
    for (let index = 0; index < dsMonChinhThemMoi.length; index++) {
        
        var table = document.getElementById("tableRestaurant");
        var row = table.insertRow(index+1+dsMonChinh.length); 
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        cell1.innerHTML = dsMonChinhThemMoi[index].ten;
        cell2.innerHTML = dsMonChinhThemMoi[index].soluong;
        cell3.innerHTML = dsMonChinhThemMoi[index].dongia;
        cell4.innerHTML = dsMonChinhThemMoi[index].tonggia;
        
        
    }
    let N = dsMonChinhThemMoi.shift();
        // console.log(N);
    
}

console.log(dsMonChinh);


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


