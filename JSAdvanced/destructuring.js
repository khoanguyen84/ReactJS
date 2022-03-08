let array = [1,2,3];
// let n1 = array[0]
// let n2 = array[1]
// let n3 = array[2]
let [,n2] = array;
console.log(n2)

let student = {
    name: "Khoa",
    age : 18,
    gender : "male"
}

let { age, name, gender} = student;
console.log("name: ", name)
console.log("age: ", age)
console.log("gender: ", gender)