//Key phải là duy nhất , nếu trùng thì nhận giá trị khai báo sau
//Value lưu trữ bất kể kiểu dữ liệu nào JS có

// let person = {
//     "name": "Pham Van A",
//     "age": 19,
//     "country": "Ha Noi",
//     // "name": "Nguyen Van B"
// }
// console.log(person);
// // console.table(person);
// // console.log(person["name"]);
// // console.log(person.age);
// // console.log(person["country"]);

// person.name = "Nguyen Van B";
// console.log(person["name"]);
// person.age += 1;
// console.log(person.age);

// // person["key moi"] = value // Them cap  key-value moi
// // delete object["key"] // Xoa 1 key

// person.nameNew = "Tran Van C";
// person.school = "DH";


// for (const key in person) {
//     if (person.hasOwnProperty(key)) {  //Neu person co chua key nay
//         const element = person[key];
//         console.log(element);
        
//     }
// }
// for(let value of person){
//     console.log(value);
    
// }

// let arr = [1,2,3];
// console.log(typeof(arr));
// console.log(typeof(person));

// // console.log(arr instanceof Array);
// console.log(arr.constructor.toString().indexOf('Array')>=0);



// let sinhvien = "Thông tin: \n"+
//                 "1.Tên: \n"+
//                 "2.Tuổi: \n"+
//                 "3.Quê quán: \n"+
//                 "4.Môn học \n"+
//                 "5.Thoát"
// while (true) {
//     let thongtin = Number(prompt(sinhvien));
//     let thoat = false;
//     switch (thongtin) {
//         case 1:
//             let ten = prompt("Nhập tên");
//             if (ten.length<0) {
//                 alert("Nhập lại");
//             }else{
//                 console.log(ten);
                
//             }
//             break;
//         case 2:
//             let tuoi = Number(prompt("Nhập năm sinh"));
//             tuoi = 2019 - tuoi;
//             console.log(`${tuoi} tuổi`);
            
//             break;
//         case 3:
//             let que = prompt("Nhập quê quán");
//             console.log(que);
//             break;
//         case 4:
//             let monhoc = prompt("Nhập môn học");
//             console.log(`Bạn đang học môn ${monhoc}`);
//             break;

//         case 5:
//             thoat = true;
//             break;
//         default:
//             alert("Nhập sai, nhập lại");
//     }
//     if (thoat) {
//         break;
//     }
// }
// alert("out");
// let capnhat = "Cập nhật thông tin: \n"
//                 "1.Cập nhật Tên: \n"+
//                 "2.Cập nhật Tuổi: \n"+
//                 "3.Cập nhật Quê quán: \n"+
//                 "4.Cập nhật Môn học \n"+
//                 "5.Thoát"
// while (true) {
//     let update = Number(prompt(capnhat));
//     let thoat = false;
//     switch (update) {
//         case 1:
//             let capnhatten = prompt("Cập nhật tên");
//             sinhvien.ten = ;
//             break;
    
//         default:
//             break;
//     }
// }



let sinhvien = {};
let name = prompt("Nhap ten");
let age = Number(prompt("Nhap tuoi"));
let country = prompt("Nhap que");
sinhvien.name = name;
sinhvien.age = age;
sinhvien.country = country;
console.log(sinhvien);

let danhsachmonhoc = [];
for (let index = 0;  index < 3; index++){
    let monhoc = prompt("Nhap mon hoc");
    danhsachmonhoc.push(monhoc);
  
}
sinhvien.subjects = danhsachmonhoc;

// let inputDSmonhoc = prompt("Nhap danh sach mon hoc, cach nhau dau ,");
// let danhsachmonhoc = inputDSmonhoc.split(",");
// danhsachmonhoc.push(inputDSmonhoc);

let danhsachkeys = "";
for (const key in sinhvien) {
    if (sinhvien.hasOwnProperty(key)) {
        danhsachkeys += key + "\n";
        
    }
}
console.log(danhsachkeys);
let inputkey = prompt("Nhap thong tin muon thay doi");
if (sinhvien.hasOwnProperty(inputkey)) {
    if (inputkey == 'age') {
        sinhvien.inputkey = Number(prompt("Nhap noi dung"));
    }else{
        sinhvien.inputkey = prompt("Nhap noi dung");
    }
}else{
    alert("Sai thong tin");
}
let lop = {
    'maSo': prompt("Nhap ma so lop"),
    'tenLop': prompt("Nhap ten lop")
}
sinhvien.classinfo = lop;

console.log(sinhvien);

for (let index = 0; index < 3; index++) {
    let monhoc = prompt("Nhap ten mon hoc");
    sinhvien.subjects.push(monhoc);
}

delete sinhvien.classinfo;
delete sinhvien.subjects;