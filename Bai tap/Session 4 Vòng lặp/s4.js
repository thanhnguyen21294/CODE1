// B1: In ra các số từ 0 đến 100
// var N ;
// for (let index = 0; index < 100+1; index++) {
//     console.log(index);
// }


// B2: In ra các số từ 100 về 0
// var N ;
// for (let index = 100; index > 0-1; index--) {
//     console.log(index);
// }

    
// B3: In ra các số chẵn/lẻ từ 0 đến 100
// var N;
// for (let index = 0; index < 101; index+=2) {
//     console.log(index);
// }  

// var N;
// for (let index = 1; index < 100; index+=2) {
//     console.log(index);
// }


// B4: In ra các số chẵn/lẻ từ 100 về 0
// var N;
// for (let index = 100; index > 0-1; index-=2) {
//     console.log(index);
// }

// var N;
// for (let index = 99; index > 0; index-=2) {
//     console.log(index);
// }


// B5: Thực hiện tính tổng: S = 1 + 2 + 3 + … + N với N nhập từ bàn phím
// let N = Number(prompt("Nhap 1 so bat ky"));
// let tong = 0;
// for (let index = 0; index < N; index++) {
//     tong = tong + index;
    
// }
// console.log(tong);


// B6: Thực hiện tính tổng: S = 1 + 3 + 5 + … + 2N + 1 với N nhập từ bàn phím
// let N = Number(prompt("Nhap 1 so bat ky"));
// let tong = 0;
// for (let index = 0; index < N+1; index++) {
//     tong = tong + 2*index +1;
    
// }
// console.log(tong);


// B7: Thực hiện tính tổng: S = 2 + 4 + 6 + … + 2N với N nhập từ bàn phím.
// let N = Number(prompt("Nhap 1 so bat ky"));
// let tong = 0;
// for (let index = 0; index < N+1; index++) {
//     tong = tong + 2*index
    
// }
// console.log(tong);


// B8: Thực hiện tính tổng: S = 1/1+ 1/2+ 1/3+ ... + 1/N với N nhập từ bàn phím.
// let N = Number(prompt("Nhap 1 so bat ky"));
// let tong = 0;
// for (let index = 1; index < N + 1 ; index++) {
//     tong = tong + 1/index;
    
// }
// console.log(tong);


// B9: Thực hiện tính tổng: S = [1/(1*2)] + [1/(2*3)] + [1/(3*4)] + ... + [1/(N*(N+1))]
// let N = Number(prompt("Nhap N"));
// let tong = 0;
// for (let index = 1; index < N+1; index++){
//     tong = tong + (1/(index*(index+1)))
  
// }
// console.log(tong);


// B10: 



// B13: Yêu cầu người dùng nhập mật khẩu, nếu mật khẩu ngắn hơn 8 ký tự, yêu cầu nhập lại.
// let N = prompt("Nhap mat khau");
// while (N.length < 8) {
//     N = prompt("Mat khau chua du 8 ky tu, nhap lai")
// }
// console.log(N);


// B14: Yêu cầu người dùng nhập mật khẩu, nếu mật khẩu ngắn hơn 8 ký tự, 
//thông báo người mật khẩu quá ngắn và yêu cầu nhập lại.
// let N = prompt("Nhap mat khau");
// while (N.length < 8) {
//     alert("Mat khau qua ngan, yeu cau nhap lai");
//     N = prompt("Nhap lai mat khau");
// }
// console.log(N);


// B15: Yêu cầu người dùng nhập mật khẩu chứa đồng thời 3 ký tự đặc biệt ($, %, _) 
//và dài ít nhất 8 ký tự. Thiếu điều kiện nào, yêu cầu người dùng nhập lại.
// while (true) {
//     let N = prompt("Nhap mat khau");
//     if ((N.length>8) && (N.includes("$") && N.includes("%") && N.includes("_"))) {
//         console.log(N);
//         break;
//     }
//     else{
//         alert("Nhap lai");
//     }
// }

