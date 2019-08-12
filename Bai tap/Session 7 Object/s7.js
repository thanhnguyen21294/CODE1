let sinhvien = {};
let ten = prompt("Nhap ten");
let tuoi = Number(prompt("Nhap tuoi"));
let que = prompt("Nhap que quan");

sinhvien.ten = ten;
sinhvien.tuoi = tuoi;
sinhvien.que = que;


console.log(sinhvien);

let danhsachmonhoc = [];
let somonhoc = Number(prompt("Nhap so mon dang hoc"));
if (somonhoc == 0) {
    alert("Khong co mon nao");
    
}else{
for (let index = 0; index < somonhoc; index++) {
    let monhoc = prompt("Nhap mon hoc");
    danhsachmonhoc.push(monhoc);
      
    }
}
sinhvien.monhoc = danhsachmonhoc;


let danhsachKeys = "";
for (const key in sinhvien) {
    if (sinhvien.hasOwnProperty(key)) {
        danhsachKeys += key + '\n';
        
        
    }
}
console.log(danhsachKeys);

let capnhat = prompt("Nhap thong tin can thay doi");
if (sinhvien.hasOwnProperty(capnhat)) {
    if (capnhat == 'tuoi') {
        sinhvien[capnhat] = Number(prompt("Nhap noi dung can thay doi"));
    }
  else {
    sinhvien[capnhat] = prompt("Nhap noi dung thay doi");
    
    }  
}   else {
    alert("Nhap lai");
}



let lophoc = [];
let masolop = Number(prompt("Ban hoc lop nao"));
let tenlop = prompt("Nhap ten lop ban dang hoc");
lophoc.masolop = masolop;
lophoc.tenlop = tenlop;
sinhvien.lop = lophoc;


let monhocthem = [];
let themsomonhoc = prompt("Nhap so mon muon hoc them");
for (let index = 0; index < themsomonhoc; index++) {
    themmonhoc = prompt("Nhap ten mon hoc");
    monhocthem.push(themmonhoc);
    
}
sinhvien.hocthem = monhocthem;



let diemtong = 0;
let somondanghoc = Number(prompt("Nhap so mon dang hoc"));
for (let index = 0; index < somondanghoc; index++) {
    diemso = Number(prompt("Nhap diem so mon hoc"));
    diemtong += diemso;
    
     
    
    
}diemtrungbinh = diemtong/somondanghoc;
console.log(diemtrungbinh);
if (diemtrungbinh>=6) {
    console.log(`Du diem ra truong`);
    
}else if (diemtrungbinh<6) {
    console.log(`Chua du diem ra truong`);
    
}else{
    console.log(`Nhap lai`);
    
}

sinhvien.totnghiep = diemtrungbinh;
if (diemtrungbinh>=6) {
    delete sinhvien.monhoc;
    delete sinhvien.lop;
    console.log(sinhvien);
    
}else{
    console.log(`Chua tot nghiep`);
    
}
