// 1. phải là 1 hàm
// 2. truyền qua đối số/ tham số
// 3. được gọi (được thực thi)
function logger(param){
    // console.log(typeof param)
    param();
}


function callBack(){
    console.log("CallBack")
}

// logger(callBack);

// function sum(a, b){
//     return a + b;
// }

// let tong = sum;
// console.log(tong(4,5))


let arr = [1,2,3,5];
function desc(n1, n2){
    return n2 - n1;
}
arr.sort(desc)

// console.log(arr)
// function process(total, value){
//     return total += value;   
// }
// let result = arr.reduce(process)
// console.log(result);


let courses = [ "JavaScript", "ReactJS", "PHP", "C#"]

// function process(item){
//     return `<li>${item}</li>`
// }
// let htmls = courses.map(function(item){
//     return `<li>${item}</li>`
// })
// document.write(htmls.join(""))

// Array.prototype.map2 = function(callBack){
//     let result = [];
//     for(let i=0; i< this.length; i++){
//         result.push(callBack(this[i], i))
//     }
//     return result;
// }
// function process(course, index){
//     return `<li>${index}. ${course}</li>`
// }
// let htmls = courses.map2(process);

// document.write(htmls.join(""))




// Array.prototype.findIndex2 = function(callBack){
//     for(let i=0; i< this.length; i++){
//         if(callBack(this[i]))
//             return i;
//     }
//     return -1;
// }


// let pos = courses.findIndex2(function(course){
//     return course === "C#1"
// })

// console.log(pos)
// console.log(courses.findIndex(function(item){
//     return item == "JavaScript1"
// }))

//truthy falsy ==> convert javascript datatype -> Boolean
// let str = null

// if(str){
//     console.log("is not null")
// }
// else{
//     console.log("is null")
// }
let number = 10

if(number){
    console.log("not equal 0")
}
else{
    console.log("equal 0")
}