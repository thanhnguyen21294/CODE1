//B1:
//a:
const x = Number(prompt("Nhap vao 1 so x"))
let N = Number(prompt("Nhap vao 1 so N"));
let tong = 0;
for (let index = 0; index < N; index++) {
    tong = tong + Math.pow(x,N);
    
}
console.log(tong);
