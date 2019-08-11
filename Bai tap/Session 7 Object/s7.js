let sinhvien = {};
let ten = prompt("Nhap ten");
let tuoi = Number(prompt("Nhap tuoi"));
let que = prompt("Nhap que quan");
sinhvien.ten = ten;
sinhvien.tuoi = tuoi;
sinhvien.que = que;
let danhsachmonhoc = [];
for (let index = 0; index < 3; index++) {
    let monhoc = prompt("Nhap mon hoc");
    danhsachmonhoc.push(monhoc);
sinhvien.monhoc = danhsachmonhoc;   
    
}