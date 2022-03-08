// optional parameter
// rest oparator
// spread oparator

// function sum(n1, n2 = 7) {
//     return n1 + n2;
// }
// function sum2() {
//     // console.log(arguments)
//     let total = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         total += arguments[i]
//     }
//     return total;
// }

// console.log(sum2(5, 6, 4, 4, 6, 7, 8, 9, 9))

// function sum3(fn, age,...paras){
//     console.log("Fullname", fn)
//     console.log("Age", age)
//     let total = 0;
//     for (let i = 0; i < paras.length; i++) {
//         total += paras[i]
//     }
//     return total;
// }
// console.log(sum3('khoa', 35, 6, 4, 4, 6, 7, 8, 9, 9))
// let n1 = 7;
// let n2 = 9;
// console.log(n1 + n2);
// console.log(sum(5))
// console.log(sum(15))

// let arr = new Array(5, 6);
// console.log(arr)

// function tinhTong(){
//     // console.log(arguments)
//     let total = 0;
//     for(let i=0;i<arguments.length;i++){
//         total += arguments[i]
//     }
//     return total;
// }
// function tinhTong(name, age, ...paras){
//     // console.log(arguments)
//     console.log(paras)
//     console.log("name", name)
//     console.log("age", age)
//     let total = 0;
//     for(let i=0;i<paras.length;i++){
//         total += paras[i]
//     }
//     return total;
// }
// console.log(tinhTong("Khoa",35,3,5,6,8,89,9,0,0,0,7))

// refrence type
// let arr = [4,6,7];

// let arr2 = [...arr];
// let arr2 = arr;
// arr[0] = 5;
// console.log(arr2)

// let obj1 = {
//     "name" : "khoa",
//     "age" : 18,
//     "email": "k@gmail.com"
// }

// let obj2 = obj1;
// let obj2 = {
//     "phone": "4645765765",
//     ... obj1
// }
// obj1.age = 40;
// console.log(obj2)

// function sum(...paras){
//     let total = 0;
//     for(let i=0;i<paras.length;i++){
//         total += paras[i]
//     }
//     return total;
// }

// let arr = [1,4,5,6,7,8,8];
// console.log(sum(1,4,5,6,7,8,8))
// console.log(sum(...arr))

// let a1 = [1,2,3]
// let a2 = [4,5,6]
// let a3 = a1.concat(a2);
// let a3 = [
//     ...a1,
//     ...a2
// ]
// console.log(a3)

let obj1 = {
    name : "Khoa",
    age : 18,
    gender: "male",
    address : "28 NTP"
}

let obj2 = {
    phone : "364564",
    email: "k@gmail.com"
}


let {name, address, ...obj4} = obj1
console.log(name)
console.log(address)
console.log(obj4)