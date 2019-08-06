//B1: Nhập vào 1 năm, kiểm tra xem năm đó có bao nhiêu ngày?
// let N = Number(prompt("Nhap vao 1 nam"));
// if (N%4 == 0) {
//     console.log(`nam ${N} co 366 ngay`);
    
// }else{
//     console.log(`nam ${N} co 365 ngay`);
    
// }



//B2: Nhập vào 1 tháng trong năm, in ra màn hình số ngày của tháng đó (Yêu cầu kiểm tra cả năm nhuận).
// let year = Number(prompt("Nhap 1 nam bat ky"));
// let month = Number(prompt("Nhap 1 thang bat ky"));
// if (((year%4 == 0)||(year%4 !=="0")) && (month ==1||month==3||month==5||month==7||month==8||month==10||month==12)) {
//     console.log(`thang ${month} cua nam ${year} co 31 ngay`);
    
// } else if ((year%4 == 0||(year%4 !=="0")) && (month ==4||month==6||month==9||month==11)) {
//     console.log(`thang ${month} cua nam ${year} co 30 ngay`);
    
// } else if ((year%4 == 0) && (month == 2)) {
//     console.log(`thang ${month} cua nam ${year} co 29 ngay`);
    
// } else if ((year%4 !== 0) && (month == 2)){
//     console.log(`thang ${month} cua nam ${year} co 28 ngay`);
    
// } else{
//     alert("Khong hop le!");
// }



//B3: Nhập vào 1 tháng trong năm, in ra mùa của tháng đó
// let N = Number(prompt("Nhap vao 1 thang"));
// if (N<=4 && N>=1) {
//     console.log(`thang ${N} la mua xuan`);
    
// } else if (N>=5 && N<=7) {
//     console.log(`thang ${N} la mua ha`);
    
// } else if (N>=8 && N<=10) {
//     console.log(`thang ${N} la mua thu`);
    
// } else if (N==11 || N==12) {
//     console.log(`thang ${N} la mua dong`);
    
// } else{
//     alert(`Khong hop le`);
    
// }
    


//B4: Nhập vào 3 số a, b, c. In ra theo thứ tự tăng dần.
// let a = Number(prompt("Nhap vao 1 so "));
// let b = Number(prompt("Nhap vao 1 so "));
// let c = Number(prompt("Nhap vao 1 so "));
// if (a>b && b>c) {
//     console.log(`${c} < ${b} < ${a}`);
    
// }else if (a>c && c>b) {
//     console.log(`${b} < ${c} < ${a}`);
    
// }else if (b>a && a>c) {
//     console.log(`${c} < ${a} < ${b}`);
    
// }else if (b>c && c>a) {
//     console.log(`${a} < ${c} < ${b}`);
    
// }else if (c>a && a>b) {
//     console.log(`${b} < ${a} < ${c}`);
    
// }else{
//     alert("Khong the sap xep, nhap lai");
// }



//B5: Nhập vào 3 số a, b, c. Kiểm tra xem 3 số đó có lập được thành tam giác không. 
//Nếu có, kiểm tra xem tam giác có vuông, cân hay đều k?
// let a = Number(prompt("Nhap canh a"));
// let b = Number(prompt("Nhap canh b"));
// let c = Number(prompt("Nhap canh c"));
// if ( a>0 && b>0 && c>0 && a!==b && a!==c && b!==c && (((a+b)>c&&Math.abs(a-b)<c) || ((a+c)>b&&Math.abs(a-c)<b) || ((b+c)>a&&Math.abs(b-c)<a||Math.abs(c-b)<a))) {
//     console.log(`Tam giac nay la tam giac thuong`);
    
// }else if ((a>0 && b>0 && c>0) &&(a*a+b*b==c*c || a*a+c*c==b*b || b*b+c*c==a*a) ) {
//     console.log(`Tam giac nay la tam giac vuong`);
    
// }else if ((a>0 && b>0 && c>0) && (((a==b)&&(a+b)>c) || ((a==c)&&(a+c)>b) || ((b==c)&&(b+c)>a))) {
//     console.log(`Tam giac nay la tam giac can`);
    
// }else if ((a>0 && b>0 && c>0) && (a==b && b==c && a==c) ) {
//     console.log(`Tam giac nay la tam giac deu`);
    
// }else{
//     alert("Khong phai la 1 tam giac");
// }




//B6: 
// let N = Number(prompt("Nhap vao 1 so dien (kWh)"));
// if (N<=50 && N>0) {
//     let N1 = 1678 * N;
//     console.log(`So tien phai tra cho ${N.toLocaleString("fi-FI")} kWh la ${N1.toLocaleString("fi-FI")} vnd`);
    
// }else if (N>50 && N<=100) {
//     let N2 = 1734 * N;
//     console.log(`So tien phai tra cho ${N.toLocaleString("fi-FI")} kWh la ${N2.toLocaleString("fi-FI")} vnd`);
    
// }else if (N>100 && N<=200) {
//     let N3 = 2014 * N;
//     console.log(`So tien phai tra cho ${N.toLocaleString("fi-FI")} kWh la ${N3.toLocaleString("fi-FI")} vnd`);
    
// }else if (N>200 && N<=300) {
//     let N4 = 2536 * N;
//     console.log(`So tien phai tra cho ${N.toLocaleString("fi-FI")} kWh la ${N4.toLocaleString("fi-FI")} vnd`);
    
// }else if (N>300 && N<=400) {
//     let N5 = 2834 * N;
//     console.log(`So tien phai tra cho ${N.toLocaleString("fi-FI")} kWh la ${N5.toLocaleString("fi-FI")} vnd`);
    
// }else if (N>400) {
//     let N6 = 2927 * N;
//     console.log(`So tien phai tra cho ${N.toLocaleString("fi-FI")} kWh la ${N6.toLocaleString("fi-FI")} vnd`);
    
// }else{
//     alert("Khong hop le");
// }



//B7: 
let N = Number(prompt("Nhap 1 so bat ky"));
if ((N>0) && (N%3 == 0 || N%3 == 1)) {
    console.log(`${N} la so chinh phuong`);
    
}else if (condition) {
    
}