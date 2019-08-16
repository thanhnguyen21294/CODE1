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
// console.log(array1[1]);

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


// let menu = "Menu: \n"+
//             "1. Danh sách sách trong thư viện: \n"+
//             "2. Thêm sách: \n"+
//             "3. Đổi tên sách: \n"+
//             "4. Xoá sách: \n"+
//             "5. Thoát";
// let danhsach = [];

// while (true) {
//     let thuvien = Number(prompt(menu));
//     let thoat = false;
//     switch (thuvien) {
//         case 1:
//             if (danhsach == 0) {
//                 alert(`Danh sách rỗng`);
//             }else{
//                 console.log("Danh sách:");
//                 for (let index = 0; index < danhsach.length; index++) {
//                     const book = danhsach[index];
//                     console.log(`${index+1}: ${book}`);
//                 }
//             }
//             break;
//         case 2:
//             let themsach = prompt("Thêm sách: ");
            
//             danhsach.push(themsach);
//             console.log(danhsach);
            
            
            
//             break;
//         case 3:
//             let sttsach = Number(prompt("Chọn số thứ tự sách cần đổi"));
//             if (sttsach > 0 && sttsach <= danhsach.length) {
//                 let tensachmoi = prompt("Nhập tên sách mới");
//                 danhsach[sttsach - 1] = tensachmoi;
//                 console.log(danhsach);
                
//             }else{
//                 alert("Nhập lại");
//             }
            
            
//             break;
//         case 4:
//             let sttxoasach = Number(prompt("Nhập số thứ tự sách cần xoá"));
//             if (sttxoasach >= 1 && sttxoasach <= danhsach.length) {
//                 danhsach.splice(sttxoasach -1 , 1);
//                 alert("Xoá sách thành công");
//             }else{  
//                 alert("Nhập lại");
//             }
//             break;
//         case 5:
//             thoat = true;
//             break;
//         default:
//             alert("Nhập sai, yêu cầu nhập lại");
//     }
//     if(thoat){
//         break
//     }
// }
// alert("Bạn đã thoát");
// console.log(danhsach);



let arr = [5,4,2,3,1];
for (let index = 0; index < arr.length; index++) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i]>= arr[i+1]) {
            
        
        let temp = arr[i];
        arr[i] = arr[i+1];
        arr[i+1] = temp;
        
        }
    }
    
}
console.log(arr);


