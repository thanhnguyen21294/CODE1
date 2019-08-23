// let h1 = document.getElementById("test").innerHTML;
// console.log(h1);

// let P = document.getElementById("P").innerHTML;
// console.log(P);



// console.log(document);



// let heading = document.getElementsByClassName("heading");
// console.log(heading);


// let secondTag = document.getElementById("P");
// console.dir(secondTag);


// document.getElementById("heading").innerHTML = "Noi dung sinh ra tu JS";


// function changetext(){
//     document.getElementById("heading").innerHTML = "Noi dung sinh ra tu JS"
// }

let n = 20;
const Pi = 3.14;
let list_Number = [2,20,3,4,5];
let person = {
    name: "Pham Van A",
    age: 20,
    country: "HN"
}


document.getElementById("dataTypeInt").innerHTML = n;
document.getElementById("dataTypeFloat").innerHTML = Pi;


for (const tag of document.getElementsByClassName("dataTypeArray")) {
    
    
    tag.innerHTML = getArrayString(list_Number);
}

function getArrayString(array){
    let result = '<ul>';
    for (const value of array) {
        console.log(value);
        
        
            result += '<li>' + value + '</li>';
           
        
    }
    result += '</ul>';
    return result;
}



for (const obj of document.getElementsByClassName("dataTypeObject")) {
    
    
    
    obj.innerHTML = getObjectString(person);
}

function getObjectString(object){
    let s = '';
    for (const key in object) {
            
            
            
            const value = object[key];
            s += value + ", ";
        
        
        
    }
    return s;
    
}
