let menu = "Menu: \n"+
            "1. Danh sach: \n"+
            "2. Nhap sach: \n"+
            "3. Them sach: \n"+
            "4. Xoa sach: \n"+
            "5. Thoat!"
while (true) {
    let thuvien = Number(prompt(menu));
    let thoat = false;
    switch (thuvien) {
        case 1:
            alert("danh sach");
            break;
        case 2:
            alert("nhap sach");
            break;
        case 3:
            alert("them sach");
            break;
        case 4:
            alert("xoa sach");
            break;
        case 5:
            thoat = true;
            break;
        default:
            alert("Nhap sai, nhap lai");
    }
    if(thoat){
        break;
    }
}
alert("Ban da thoat");