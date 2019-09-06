let dsMonChinh = [];
let dsMonChinhThemMoi = [];

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



dsMonChinh.push(monChinh1, monChinh2, monChinh3);
let dsMonChinhJSON = JSON.parse(JSON.stringify(dsMonChinh));


for (let index = 0; index < dsMonChinh.length; index++) {
    let table = document.getElementById("tableRestaurantMainFood");
    let row = table.insertRow(index + 1);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);
    let cell5 = row.insertCell(4);
    let cell6 = row.insertCell(5);
    cell1.innerHTML = dsMonChinh[index].ten;
    cell2.innerHTML = dsMonChinh[index].soluong;
    cell3.innerHTML = dsMonChinh[index].dongia;
    cell4.innerHTML = dsMonChinh[index].tonggia;
    cell5.innerHTML = "<button onclick='suaMonChinh()'>Sửa</button>";
    if (cell2.innerHTML == 0) {
        cell6.innerHTML = "Hết hàng";
    } else {
        cell6.innerHTML = "Còn hàng";
    }

}

function thongtinMon() {
    return {
        ten: '',
        soluong: 0,
        dongia: 0,
        tonggia: 0
    }
}

function updateFood(food, tenMoi, soluong, dongia) {
    food.ten = tenMoi;
    food.soluong = soluong;
    food.dongia = dongia;
    food.tonggia = soluong * dongia;
}

function addFood() {
    let A = document.getElementById("newFood").value;
    let B = document.getElementById("newAmount").value;
    let C = document.getElementById("newPrice").value;
    if ((!A || A.trim().length === 0) || (isNaN(A) == false) || (!B || B.trim().length === 0) || (!C || C.trim().length === 0)) {
        alert("Nhập lại!");

    }
    else {
        let newFood = thongtinMon();
        let tenmonmoi = document.getElementById("newFood").value;
        let soluong = document.getElementById("newAmount").value;
        let dongia = document.getElementById("newPrice").value;
        updateFood(newFood, tenmonmoi, soluong, dongia);
        dsMonChinhThemMoi.push(newFood);

        for (let index = 0; index < dsMonChinhThemMoi.length; index++) {

            let table = document.getElementById("tableRestaurantMainFood");
            let row = table.insertRow(index + 1 + dsMonChinh.length);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            let cell6 = row.insertCell(5);
            cell1.innerHTML = dsMonChinhThemMoi[index].ten;
            cell2.innerHTML = dsMonChinhThemMoi[index].soluong;
            cell3.innerHTML = dsMonChinhThemMoi[index].dongia;
            cell4.innerHTML = dsMonChinhThemMoi[index].tonggia;
            cell5.innerHTML = "<button>Sửa</button>";
            if (cell2.innerHTML == 0) {
                cell6.innerHTML = "Hết hàng";
            } else {
                cell6.innerHTML = "Còn hàng";
            }
        }
        for (let index = 0; index < dsMonChinhThemMoi.length; index++) {
            let N = dsMonChinhThemMoi.shift();
            dsMonChinhJSON.push(N);
            console.log(dsMonChinhJSON);
        }
    }
}





