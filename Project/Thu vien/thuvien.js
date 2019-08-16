let N = "Menu: \n" +
        "1.Danh sách: \n" +
        "2.Thêm sách: \n" +
        "3.Đổi tên sách: \n" +
        "4.Mượn sách: \n" +
        "5.Xóa sách: \n" +
        "6.Thoát"
let thuvien = [];


while (true) {
    let Menu = Number(prompt(N));
    let thoat = false;

    switch (Menu) {
        case 1:
            if (thuvien == 0) {
                alert("Danh sách rỗng");
                
            }   else{
                for (let index = 0; index < thuvien.length; index++) {
                    // let sach = thuvien[index];
                    console.log(`${index + 1} + ${thuvien[index]}`);
                    
                    
                }
            }
            break;

        case 2:
            let themsach = prompt("Nhập tên sách cần thêm");
            if (themsach == 0) {
                alert("Không có sách để thêm");
            }   else{
                
                thuvien.push(themsach);
                
                
            }
            console.log(thuvien);
            break;
        
        case 3:
            let sttsachcandoi = Number(prompt("Nhập số thứ tự sách cần đổi"));
            if (sttsachcandoi > 0 && sttsachcandoi <= thuvien.length) {
                let tensachcandoi = prompt("Nhập tên sách mới");
                thuvien[sttsachcandoi - 1] = tensachcandoi;
                console.log(thuvien);
                
                
            } 
                else{
                alert("Không tìm thấy sách");
            }
            
            break;
            
        case 4:
            
            break;

        case 5:
            let sttsachcanxoa = Number(prompt("Nhập số thứ tự sách cần xóa"));
            if (sttsachcanxoa > 0 && sttsachcanxoa <= thuvien.length) {
                thuvien.splice(sttsachcanxoa - 1, 1);
            } else{
                alert("Không tìm thấy sách cần xóa");
            }
            console.log(thuvien);
            
            break;
            
        case 6:
                thoat = true;
                break;
        default:
            alert("Nhập lại!");
    }
    if (thoat) {
        break;
    }
}
alert("Bạn đã thoát");
console.log("Bạn đã thoát");




