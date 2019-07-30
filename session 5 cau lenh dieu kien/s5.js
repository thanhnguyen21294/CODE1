// a < b && b <= c
// a < b || a >= c
// a > b && a <= c
// a <= b && a >= c    // !(a >= b && a <= c) 

// let number = Number(prompt("Nhap so"));
// if (number >= 5) {
//     console.log(`So vua nhap ${number} khong nho hon 5`);
    
// }


// let N1 = Number(prompt("Nhap so thu nhat"));
// let N2 = Number(prompt("Nhap so thu hai"));
// if (N1 > N2) {
//     console.log(`${N1} lon hon ${N2}`);
// }
//     else if (N1 < N2) {
//         console.log(`${N1} nho hon ${N2}`);
//     }
//     else {
//         console.log(`${N1} bang ${N2}`);
        
//     }
       


// let thang = Number(prompt("Nhap vao 1 thang"));

// if (thang>=1 && thang <=4) {
//     console.log(`thang ${thang} la mua xuan`);
    
// }
// else if (thang<=6) {
//     console.log(`thang ${thang} la mua ha`);
    
// }
// else if (thang<=9) {
//     console.log(`thang ${thang} la mua thu`);
    
// }
// else if (thang<=12) {
//     console.log(`thang ${thang} la mua dong`);
    
// }
// else{
//     alert("Khong hop le");
// }



let a = Number(prompt("Nhap so a"));
let b = Number(prompt("Nhap so b"));
if (a != 0 ) {
    console.log(`PT ax + b = 0 co a=${a}, b=${b} co nghiem duy nhat`);
    
}
else if (a == 0 && b!=0) {
    console.log(`PT ax + b = 0 co a=${a}, b=${b} vo nghiem`);
    
}
else {
    console.log(`PT ax + b = 0 co a=${a}, b=${b} co vo so nghiem`);
    
}
