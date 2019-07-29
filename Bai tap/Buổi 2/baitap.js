// Yêu cầu người dùng nhập mật khẩu
// nếu độ dài < 8 => Nhập lại
// Nếu ko chứa 1 trong 3 ký tự đặc biệt (%, $, _) => Nhập lại



// Yêu cầu người dùng nhập 2 số a,b
// In ra dấu * thành hình chữ nhật, tam giác, trong đó a và b là chiều dài cạnh


// let N = prompt("Nhap mat khau");
// while (N.length < 8 && (!N.includes('%') || !N.includes('&') || !N.includes('_'))) {
//     N = prompt("Nhap lai");
// }
// console.log(N);


// while (true) {
//     let N = prompt("Nhap mat khau");
//       if(N.length > 8 && (N.includes('%') || N.includes('&') || N.includes('_'))) 
//           {console.log(N);
//       break;}
      
//         let N = prompt("AYYYYY");
//         break;
      
//   }
  



while (true) {
    const pwd = prompt('Nhap mat khau');
  
    if ((pwd.length >= 8) && (pwd.includes('%') || pwd.includes('$') || pwd.includes('_'))) {
        console.log(pwd);
      break;
    }
   }
  
  