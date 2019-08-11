// let menu = "Menu: \n"+
//             "1. Danh sach: \n"+
//             "2. Nhap sach: \n"+
//             "3. Them sach: \n"+
//             "4. Xoa sach: \n"+
//             "5. Thoat!"
// while (true) {
//     let thuvien = Number(prompt(menu));
//     let thoat = false;
//     switch (thuvien) {
//         case 1:
//             alert("danh sach");
//             break;
//         case 2:
//             alert("nhap sach");
//             break;
//         case 3:
//             alert("them sach");
//             break;
//         case 4:
//             alert("xoa sach");
//             break;
//         case 5:
//             thoat = true;
//             break;
//         default:
//             alert("Nhap sai, nhap lai");
//     }
//     if(thoat){
//         break;
//     }
// }
// alert("Ban da thoat");




let menu = "Menu: \n"+
            "1.Danh sach: \n"+
            "2.Them sach: \n"+
            "3.Gia ban: \n"+
            "4.So luong: \n"+
            "5.Sua sach: \n"+
            "6.Xoa sach: \n"+
            "7.Thoat!"
let danhsach = [];

while (true) {
    let thuvien = Number(prompt(menu));
    let thoat = false;
    switch (thuvien) {
        case 1:
            if (danhsach == 0) {
                alert("Danh sach rong");
            }else 
                
                for (let index = 0; index < danhsach.length; index++) {
                let sach = danhsach[index];
                console.log(`${index + 1} + ${sach}`);
            }
            break;    
        
        case 2:
            let themsach = prompt("Nhap them ten sach");
            if (themsach.length == 0) {
                alert("Nhap lai");
            }else{
                danhsach.push(themsach);
                console.log(danhsach);
            }
            break;
        
        case 3:
            if (danhsach == 0) {
                alert("Danh sach rong, vao muc 2 de nhap sach");
            }else{
                let sttsachcanban = Number(prompt("Nhap so thu tu sach can ban"));
                
                if (sttsachcanban>0 && sttsachcanban<=danhsach.length) {
                    let giaban = Number(prompt("Nhap gia ban"));
                    danhsach[sttsachcanban - 1] = giaban;
                    console.log(`Sach ${sttsachcanban} co gia ${giaban.toLocaleString("fi-FI")} vnd`);
                }else{
                    alert("Khong co sach ban dang tim");
                    
                }
                
            }
            break;
        
        case 4:
            
            break;
        
        case 5:
            let suasach = Number(prompt("Nhap so thu tu sach can sua"));
            if (suasach>0 && suasach<=danhsach.length) {
                let tensachmoi = prompt("Nhap ten sach moi");
                danhsach[suasach - 1] = tensachmoi;
                console.log(danhsach);
                
            }else{
                alert("Nhap lai");
            }
            break;
        
        case 6:
            let xoasach = Number(prompt("Nhap so thu tu sach can xoa"));
            if (xoasach>0 && xoasach<=danhsach.length) {
                danhsach.splice(xoasach - 1 , 1);
                console.log(danhsach);
                
            }else {
                alert("Nhap lai");
            }
            break;
        
        case 7:
            thoat = true;
            break;   
        
        default:
            alert("Nhap lai");
    }
    if (thoat) {
        break;
    }
}
alert("Da thoat");
console.log(`Ban da thoat`);


