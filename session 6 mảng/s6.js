//let<ten bien> = [gia tri1, giatri2,...];
//Do dai cua mang:
// (ten bien).length: do dai mang
//Truy cap tung gia tri:
//(ten bien)[index]: Gia tri tai chi so index 

// let array1 = [7,2,3,4,5,6];

// for (let index = 0; index < array1.length; index++) {
//     const element = array1[index];
//     console.log(element);
    
    
// }
// console.log(array1[0]);

//Them gia tri: ten bien.push(gia tri) : them gia tri vao cuoi mang
//              ten bien.unshift(gia tri): them gia tri vao dau mang
//              ten bien[index] = giatri;

// let thongtin = ["Pham Van A", "Ha Noi ", 19,["JS","HTML"]];
// for (let index = 0; index < thongtin.length; index++) {
//     const element = thongtin[index];
//     console.log(element);
    
// }
// console.log(thongtin[2]);
// thongtin[2]+=1;
// console.log(thongtin[2]);

// console.log(thongtin);
// let old_length = thongtin.length;
// let new_length = thongtin.push("DHQGHN","Tin8A4");
// console.log(thongtin);
// console.log(`Gia tri cu: ${old_length}`);
// console.log(`Gia tri moi: ${new_length}`);

// for (let index = 0; index < thongtin.length; index++) {
//     const element = thongtin[index];
//     console.log(element);
    
// }

// thongtin.unshift("Nguyen Van B","Nguyen Van C")
// for (let index = 0; index < thongtin.length; index++) {
//     const element = thongtin[index];
//     console.log(element);
// }
// console.log("====");


// thongtin[thongtin.length] = "abc"; 
// for (let index = 0; index < thongtin.length; index++) {
//     const element = thongtin[index];
//     console.log(element);
// }



// let N = Number(prompt("Nhap do dai N canh cua da giac"));
// let dagiac = [];
// for (let index = 0; index < N; index++) {
//     let dodai = Number(prompt("Nhap do dai canh"));
//     dagiac.push(dodai);
    
// }
// console.log(dagiac);

// let sum = 0;

// for (let index = 0; index < dagiac.length; index++) {
//     let dodaicanh = dagiac[index];
//     sum = sum + dodaicanh;
// }
// console.log(sum);



// let array2 = [2,3,4,5,6];

// delete array2[3];
// array2.pop();
// array2.shift();
// console.log(array2);


let menu = "Menu: \n"+
            "1. Danh sách sách trong thư viện: \n"+
            "2. Thêm sách: \n"+
            "3. Đổi tên sách: \n"+
            "4. Xoá sách: \n"+
            "5. Thoát";
while (true) {
    console.log(menu);
    let choose = Number(prompt("Chon Menu: "));
    let exit = false;
    switch (choose) {
        case 1:
            alert("1");
            break;
        case 2:
            alert("2");
             break;
        case 3:
            alert("3");
            break;
        case 4:
            alert("4");
            break;
        case 5:
            exit = true;
            break;
        
        default:
            alert("Nhap sai roi, nhap lai");
            
    }
    if(exit){
        true;
    }
}
