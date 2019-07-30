// Yêu cầu người dùng nhập mật khẩu
// nếu độ dài < 8 => Nhập lại
// Nếu ko chứa 1 trong 3 ký tự đặc biệt (%, $, _) => Nhập lại



// Yêu cầu người dùng nhập 2 số a,b
// In ra dấu * thành hình chữ nhật, tam giác, trong đó a và b là chiều dài cạnh



// while (true) {
//   let N = prompt("Nhap mat khau");
// if ((N.length > 8) && (N.includes('%') || N.includes('&') || N.includes('_'))) {
 
//   console.log(N);
  
//   break;
// }
// }


// let matkhau = prompt("Nhap mat khau");
// while (matkhau.length < 8) {
//     matkhau = prompt("Nhap lai mat khau");
// }

// let codauphantram = matkhau.includes("%");
// let codauva = matkhau.includes("&");
// let codaugachduoi = matkhau.includes("_");

// while (codauphantram == false) {
//     matkhau = prompt("mat khau phai co dau %, yeu cau nhap lai");
//     codauphantram = matkhau.includes("%");
// }

// while (codauva == false) {
//     matkhau = prompt("mat khau phai co dau &, yeu cau nhap lai");
//     codauphantram = matkhau.includes("&");
// }

// while (codaugachduoi == false) {
//     matkhau = prompt("mat khau phai co dau _, yeu cau nhap lai");
//     codauphantram = matkhau.includes("_");
// }


// let a = Number(prompt("Nhap so a"));
// let b = Number(prompt("Nhap so b"));
// let hinhchunhat = "";
// for (let x = 0; x < b; x++) {
//     let row ="";
//     for (let y = 0;  y < a; y++){
//         row = row + "*";
      
//     }
//     hinhchunhat = row + "\n";
    
// }
// console.log(hinhchunhat);



let a = Number(prompt("Nhap so a"));
let row = "";
for (let index = 0; index < a; index++) {
    row = row + "*";
    console.log(row);   
}
for (let index = 0; index < a-1; index++) {
    row = row.slice(0, row.length - 1);
    console.log(row);
    
    
}

    



