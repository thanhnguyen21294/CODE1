function submit1(){
    let number = document.getElementById("inputNumber1").value;
    if (isNaN(number) == false) {
        
    
    function tinhGiaiThua(N){
        tich = 1;
        for (let index = 1; index <= N; index++) {
            tich *= index;
            
        }
        return tich
    }
    
    document.getElementById("ketqua1").innerHTML = tinhGiaiThua(number);
}   else{
    alert("Không phải là số");
    }
}



function submit2(){
    let number2 = document.getElementById("inputNumber2").value;
    if (isNaN(number2) == false) {
        function tinhTong(N){
            tong = 0;
            for (let index = 1; index <= N; index++) {
                tong += index;
                
            }
            return tong;
        }
        document.getElementById("ketqua2").innerHTML = tinhTong(number2);
    }   else{
        alert("Nhập lại")
    }
}


function submit3(){
    let a = Number(document.getElementById("inputa").value);
    let b = Number(document.getElementById("inputb").value);
    
        let tong = a + b;
        let hieu = a - b;
        let tich = a * b;
        let thuong = a / b;
        
        

    
    let ketQua = `  ${a} + ${b} = ${tong} <br/>
                    ${a} - ${b} = ${hieu} <br/>
                    ${a} * ${b} = ${tich} <br/>
                    ${a} / ${b} = ${thuong} <br/>`
    document.getElementById("ketqua3").innerHTML = ketQua;
}
