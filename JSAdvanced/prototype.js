class Student{
    constructor(name){
        this.name = name
    }
}

Student.prototype.greeting = function() {
    console.log("hello world")
}

Array.prototype.concat2 = function(array){
    let arr = [
                ...this
                , ... array
            ]
    return arr;
}
let arr1 = [1,2,3]
let arr4 = [10,20,30]
let arr2 = [4,5,6]
let arr3 = arr4.concat2(arr2)
console.log(arr3)