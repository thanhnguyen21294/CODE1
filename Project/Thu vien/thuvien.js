// let N = "Menu: \n" +
//         "1.Danh sách: \n" +
//         "2.Thêm sách: \n" +
//         "3.Đổi tên sách: \n" +
//         "4.Mượn sách: \n" +
//         "5.Xóa sách: \n" +
//         "6.Thoát"
// let thuvien = [];


// while (true) {
//     let Menu = Number(prompt(N));
//     let thoat = false;

//     switch (Menu) {
//         case 1:
//             if (thuvien == 0) {
//                 alert("Danh sách rỗng");
                
//             }   else{
//                 for (let index = 0; index < thuvien.length; index++) {
//                     // let sach = thuvien[index];
//                     console.log(`${index + 1} + ${thuvien[index]}`);
                    
                    
//                 }
//             }
//             break;

//         case 2:
//             let themsach = prompt("Nhập tên sách cần thêm");
//             if (themsach == 0) {
//                 alert("Không có sách để thêm");
//             }   else{
                
//                 thuvien.push(themsach);
                
                
//             }
//             console.log(thuvien);
//             break;
        
//         case 3:
//             let sttsachcandoi = Number(prompt("Nhập số thứ tự sách cần đổi"));
//             if (sttsachcandoi > 0 && sttsachcandoi <= thuvien.length) {
//                 let tensachcandoi = prompt("Nhập tên sách mới");
//                 thuvien[sttsachcandoi - 1] = tensachcandoi;
//                 console.log(thuvien);
                
                
//             } 
//                 else{
//                 alert("Không tìm thấy sách");
//             }
            
//             break;
            
//         case 4:
            
//             break;

//         case 5:
//             let sttsachcanxoa = Number(prompt("Nhập số thứ tự sách cần xóa"));
//             if (sttsachcanxoa > 0 && sttsachcanxoa <= thuvien.length) {
//                 thuvien.splice(sttsachcanxoa - 1, 1);
//             } else{
//                 alert("Không tìm thấy sách cần xóa");
//             }
//             console.log(thuvien);
            
//             break;
            
//         case 6:
//                 thoat = true;
//                 break;
//         default:
//             alert("Nhập lại!");
//     }
//     if (thoat) {
//         break;
//     }
// }
// alert("Bạn đã thoát");
// console.log("Bạn đã thoát");





let N = "Menu: \n"+
        "1.Danh sách sách trong thư viện: \n"+
        "2.Thêm sách: \n"+
        "3.Cập nhật thông tin sách: \n"+
        "4.Xóa sách: \n"+
        "5.Mượn sách: \n"+
        "6.Thống kê sách theo số lượng: \n"+
        "7.Sắp xếp sách theo số lượng, đơn giá, tổng giá trị: \n"+
        "8.Thoát \n";

let danhSach = [];
dSThuVien();
while (true) {
    let message = Number(prompt(N));
    let exit = false;
    switch (message) {
    
    case 1:
        inDSSach();
        break;
    case 2:
        themSachMoi();
        break;
    case 3:
        capNhatTTSach();
        break;

    case 4:
        xoaSach();
        break;

    case 5:
        muonSach();
        break;
    case 6:
        thongKeSachTheoSoLuong();
        break;
    case 7:
        sapXepSach();
        break;
    case 8:
        exit = true
        break;
    default:
        alert("Nhập sai , yêu cầu nhập lại");
}
    if (exit) {
    break;
    }
}

function sachMacDinh(){
    return{
        ten: '',
        gia: 0,
        soluong: 0
    }
}

function capNhatSach(sach, ten, gia, soluong){
    sach.ten = ten;
    sach.gia = gia;
    sach.soluong = soluong;
}

function dSThuVien(){
    let sach1 = sachMacDinh();
    capNhatSach(sach1,"Sách 1", 10000, 20);
    let sach2 = sachMacDinh();
    capNhatSach(sach2,"Sách 2", 50000, 10);
    danhSach.push(sach1,sach2);
}   

dSSach = {
    'ten': "",
    'gia': "",
    'soluong': ""
};

function inDSSach(dSSach){
    
    
    
    if (typeof(dSSach) == 'undefined') {
        dSSach = danhSach;
    }
    if (dSSach.length == 0) {
        alert("Danh sách rỗng");
    }
    else{
        let m = "Danh sách: \n";
        m = 'STT: Thông tin sách';
        for (let index = 0; index < dSSach.length; index++) {
            const sach = dSSach[index];
            m += '\n' + `${index+1}: ` + sachToString(sach);
        }
        alert(m);
    }
    
}

function sachToString(sach){
let s = '';
for (const key in sach) {
    const value = sach[key];
    s += key + ': ' + value + ', ';
    }
    if (s.length > 0) {
        s = s.substring(0, s.length - 2);
    }
    return s;
}

function thongKeSachTheoSoLuong(a,b){
    return a.soluong - b.soluong;
}
danhSach.sort(thongKeSachTheoSoLuong);

function themSachMoi(){
    let tenSachMoi = prompt("Nhập tên sách mới");
    let soLuongSachMoi = Number(prompt("Nhập số lượng"));
    for (let index = 0; index < danhSach.length; index++) {
        const sach = danhSach[index];
        if (tenSachMoi.toLowerCase() == dSSach.ten.toLowerCase()) {
            sach.soluong += soLuongSachMoi;
            // return;
        }
    }
    let giaSachMoi = Number(prompt("Nhập giá tiền"));
    let sachMoi = sachMacDinh();
    capNhatSach(sachMoi,tenSachMoi,giaSachMoi,soLuongSachMoi);
    danhSach.push(sachMoi);
}


alert("Bạn đã thoát");





