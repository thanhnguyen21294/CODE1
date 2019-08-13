// let sinhvien = {};
// let ten = prompt("Nhap ten");
// let tuoi = Number(prompt("Nhap tuoi"));
// let que = prompt("Nhap que quan");

// sinhvien.ten = ten;
// sinhvien.tuoi = tuoi;
// sinhvien.que = que;


// console.log(sinhvien);

// let danhsachmonhoc = [];
// let somonhoc = Number(prompt("Nhap so mon dang hoc"));
// if (somonhoc == 0) {
//     alert("Khong co mon nao");
    
// }else{
// for (let index = 0; index < somonhoc; index++) {
//     let monhoc = prompt("Nhap mon hoc");
//     danhsachmonhoc.push(monhoc);
      
//     }
// }
// console.log(danhsachmonhoc);

// sinhvien.monhoc = danhsachmonhoc;


// let danhsachKeys = "";
// for (const key in sinhvien) {
//     if (sinhvien.hasOwnProperty(key)) {
//         danhsachKeys += key + '\n';
        
        
//     }
// }
// console.log(danhsachKeys);

// let capnhat = prompt("Nhap thong tin can thay doi");
// if (sinhvien.hasOwnProperty(capnhat)) {
//     if (capnhat == 'tuoi') {
//         sinhvien[capnhat] = Number(prompt("Nhap lai tuoi"));
//     }
//     else {
//     sinhvien[capnhat] = prompt("Nhap noi dung thay doi");
    
//     }  
// }   
//     else {
//     alert("Nhap lai");
// }



// let lophoc = [];
// let masolop = Number(prompt("Ban hoc lop nao"));
// let tenlop = prompt("Nhap ten lop ban dang hoc");
// lophoc.masolop = masolop;
// lophoc.tenlop = tenlop;
// sinhvien.lop = lophoc;


// let monhocthem = [];
// let themsomonhoc = prompt("Nhap so mon muon hoc them");
// for (let index = 0; index < themsomonhoc; index++) {
//     themmonhoc = prompt("Nhap ten mon hoc");
//     monhocthem.push(themmonhoc);
    
// }
// sinhvien.hocthem = monhocthem;



// let diemtong = 0;
// let somondanghoc = Number(prompt("Nhap so mon dang hoc"));
// for (let index = 0; index < somondanghoc; index++) {
//     diemso = Number(prompt("Nhap diem so mon hoc"));
//     diemtong += diemso;
    
     
    
    
// }diemtrungbinh = diemtong/somondanghoc;
// console.log(diemtrungbinh);
// if (diemtrungbinh>=6) {
//     console.log(`Du diem ra truong`);
    
// }else if (diemtrungbinh<6) {
//     console.log(`Chua du diem ra truong`);
    
// }else{
//     console.log(`Nhap lai`);
    
// }

// sinhvien.totnghiep = diemtrungbinh;
// if (diemtrungbinh>=6) {
//     delete sinhvien.monhoc;
//     delete sinhvien.lop;
//     delete sinhvien.hocthem;
//     console.log(sinhvien);
    
// }else{
//     console.log(`Chua tot nghiep`);
    
// }



let sinhvien = {};
let ten = prompt("Nhập tên");
let tuoi = prompt("Nhập tuổi");
let que = prompt("Nhập quê quán");
sinhvien.ten = ten;
sinhvien.tuoi = tuoi;
sinhvien.que = que;
console.log(sinhvien);

let monhoc = [];
let somonhoc = Number(prompt("Nhập số lượng môn học"));
if (somonhoc == 0) {
    console.log("Không có môn nào");
    
}else{
    for (let index = 0; index < somonhoc; index++) {
    tenmonhoc = prompt(`Nhập tên môn học thứ ${index + 1}`);
    monhoc.push(tenmonhoc);
    sinhvien.mondanghoc = monhoc;
    }
}
console.log(sinhvien.mondanghoc);


let danhsachKeys = "";
for (const key in sinhvien) {
    if (sinhvien.hasOwnProperty(key)) {
        danhsachKeys += key +  "\n"; 
        
    }
}

console.log(danhsachKeys);

let nhapthaydoi = prompt("Bạn muốn thay đổi thông tin gì");
if (sinhvien.hasOwnProperty(nhapthaydoi)) {
    if (nhapthaydoi == 'tuoi') {
        sinhvien[nhapthaydoi] = Number(prompt("Nhập số tuổi cần đổi"));
    }
    else{
    sinhvien[nhapthaydoi] = prompt("Nhập nội dung cần thay đổi");
} 
}   
    else{
    console.log(`Nhập lại`);
    
}
console.log(sinhvien);

let lophoc = [];
let lop = Number(prompt("Bạn đang học lớp mấy"));
let tenlop = prompt("Tên lớp bạn đang học");
lophoc.lop = lop;
lophoc.tenlop = tenlop;
sinhvien.lop = lophoc;
console.log(sinhvien.lop);

let themmonhoc = [];
let nhapthemsomon = Number(prompt("Nhập số lượng môn học thêm"));
for (let index = 0; index < nhapthemsomon; index++) {
    monhocthem = prompt(`Nhập môn học thêm thứ ${index + 1}`);
    themmonhoc.push(monhocthem);
    sinhvien.monhocthem = themmonhoc;
}
console.log(themmonhoc);

let somondanghoc = Number(prompt("Nhập số lượng môn đang học"));
let diemtong = 0;
for (let index = 0; index < somondanghoc; index++) {
    diemsotungmon = Number(prompt(`Nhập điểm số môn thứ ${index + 1}: `));
    diemtong += diemsotungmon;
    
    
}
console.log(`Tổng điểm: ${diemtong}`);
let diemtrungbinh = diemtong/somondanghoc;
console.log(`Điểm trung bình xét tốt nghiệp: ${diemtrungbinh}`);
if (diemtrungbinh>=6) {
    delete sinhvien.mondanghoc;
    delete sinhvien.monhocthem;
    delete sinhvien.lop;
    console.log(`Đã ra trường`);
    console.log(sinhvien);
    
}else{
    console.log(`Chưa ra trường`);
    console.log(sinhvien);
    
}

