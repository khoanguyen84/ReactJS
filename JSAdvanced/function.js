// 1. Declareration Function
// 2. Expression Function
// 3. Anonymous Function

// ==> Hoisting
"use strict"; // chế độ nghiêm ngặt
console.log(sum())
function sum() {
    return 5 + 7;
}
let sumHandle = function () {
    return 5 + 7;
}
console.log(sumHandle());
let array = [3, 5, 3, 3, 6, 6, 2, 9];


let descSort = function (n1, n2) {
    return n2 - n1;
}
console.log(array.sort(ascSort))


// console.log(array.sort(function(n1, n2){
//     return n1 - n2;
// }))
console.log(array.sort(descSort))
function ascSort(n1, n2) {
    return n1 - n2;
}

for(var i = 0; i< 10; i++){
    console.log(i)
}
console.log("i:", i);


