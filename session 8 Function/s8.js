// function sayHello(){
//     console.log("Hello, World!");
    
// }
// sayHello();

// for (let index = 0; index < 5; index++) {
//     sayHello();
    
// }

// let myName = function(){
//     console.log(`My name is ...`);
    
// }
// myName();
// console.log(typeof(myName));
// console.log(typeof(sayHello));

// let number = 3;


// function chanle(a){
//     if (a % 2 == 0) {
//         console.log("Số chẵn");
        
//     }else{
//         console.log("Số lẻ");
        
//     }
// }
// let number = Number(prompt("Nhap 1 so"));
// chanle(number);

// function tong(a,b){
//     let sum = a + b;
//     console.log(a);
//     console.log(b);
    
//     console.log("Tong cua 2 so la " +sum);
    
// }
// let x = 10;
// let y = 20;
// // tong(x,y);
// tong(y,x);





// function tinhtong(array){
//     console.log(m);
    
//     let sum = 0;
// for (const value of array) {
//     sum += value;
        
        
    
// }
// console.log("sum = " + sum);
// }
// let arr = [1,2,3,4,5,6];
// tinhtong(arr);

// let m = 20;
// tinhtong(m);
// tong(m);



// function tong(a,b,c,d){
//     let sum = a + b + c + d;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
    
    
//     console.log("Tong cua 4 so la " +sum);
    
// }
// let N = [1,2,3,4];
// tong(1,2);


// function info(M,N){
//     for (let index = 0; index < N; index++) {
//         for (const key in M) {
//         if (M.hasOwnProperty(key)) {
//             const value = M[key];
//             console.log(`${index+1}: ${value}`);
            
            
//         }
//     }
// }
// }
// let so = Number(prompt("Nhap so lan can in"));
// let thongtin = {
// ten : "thanh",
// tuoi : 100,
// que : "hanoi",
// truong : "DH KT KT CN"
// }
// info(thongtin,so);



// function solonnhat(a,b,c){
//     if ((a>b && b>c) || (a>c && c>b)) {
//         console.log(`So lon nhat la so a: ${a}`);
        
//     }else if ((b>a && a>c) || (b>c && c>a)) {
//         console.log(`So lon nhat la so b : ${b}`);
        
//     }else if ((c>a && a>b) || (c>b && b>a)) {
//         console.log(`So lon nhat la so c" ${c}`);
        
//     }else{
//         alert("Nhap lai");
//     }
// }
// let N1 = Number(prompt("Nhap so thu nhat"));
// let N2 = Number(prompt("Nhap so thu hai"));
// let N3 = Number(prompt("Nhap so thu ba"));
// solonnhat(N1,N2,N3);



// function somu(a,b){
//     console.log(`${Math.pow(a,b)}`);
    
// }
// let N1 = Number(prompt("Nhap so x"));
// let N2 = Number(prompt("Nhap so y"));
// somu(N1,N2);


// function giaithua(a){
//     let tich = 1
//     for (let index = 0; index < a; index++) {
//         tich = tich*(index+1);
        
        
//     }
//     console.log(tich);
    
// }
// let N = Number(prompt("Nhap vao 1 so"));
// giaithua(N);


function danhsachsinhvien(dssv){
    for (let index = 0; index < dssv.length; index++) {
        const sinhvien = dssv[index];
        insinhvien(sinhvien);
        console.log(sinhvien);
        
       
    }
}    

function insinhvien(sinhVien){
    for (const key in sinhVien) {
        if (sinhVien.hasOwnProperty(key)) {
            const value = sinhVien[key];
            console.log(key + ": " + value);
            
        }
    }
}

