if (typeof Array.prototype.includes2 != "function") {
    Array.prototype.includes2 = function (value) {
        for (let i = 0; i < this.length; i++) {
            if (this[i] === value)
                return true;
        }
        return false;
    }
}
if (typeof Array.prototype.max != "function") {
    Array.prototype.max = function () {
        let max = this[0];
        for (let i = 1; i < this.length; i++) {
            if (this[i] > max)
                max = this[i]
        }
        return max
    }
}

let array = [1, 2, 3]
// console.log(array.max())
// console.log(array.includes2(21))
// console.log(array.includes2(2))

let courses = ["JavaScript", "ReactJS", "Java"];
let html = courses.map(function (course) {
    return `<li>${course}</li>`
})


Array.prototype.join2 = function (separator = ",") {
    let str = this[0];
    for (let i = 1; i < this.length; i++) {
        str += separator + this[i];
    }
    return str;
}

// document.write(html.join2(""))


let numbers = ["1", "2", "3", "4", "5"];
// let numbers = [1,2,3,4,5];

function handleReduce(total, curr) {
    // console.log(total)
    return total.concat(Number(curr));

}
let result = numbers.reduce(handleReduce, [])

console.log(result);


// function myFunction(param){
//     param(1234)
// }

// function myCallback(value){
//     console.log("value: ", value);
// }

// myFunction(myCallback)

const courses2 = ["Javascript", "PHP", "JAVA", "C#"];

Array.prototype.map2 = function (callBack) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callBack(this[i], i + 1));
    }
    return result;
}

function handleMap(course, index) {
    return `<li>${index}. ${course}</li>`
}
let htmls = courses2.map2(handleMap)

// console.log(htmls)

// setTimeout(function(){
//     console.log(1)
//     setTimeout(function(){
//         console.log(2)
//         setTimeout(function(){
//             console.log(3)
//         }, 1000)
//     }, 1000)
// }, 1000)

const promise = new Promise(
    //logic
    //resolve
    //reject
    function(resolve, reject){
        resolve([
            {
                id: 1,
                name: "javascript"
            },
            {
                id: 2,
                name: "PHP"
            }
        ]);
    }
)


promise
    .then(function(courses){
        return new Promise(function(resolve){
            setTimeout(function(){
                resolve([1,2,3])
            }, 3000)
        })
    })

    .then(function(data){
        console.log(data)
    })
    .catch(function(){
        console.log("Failure!")
    })
    .finally(function(){
        console.log("Done!")
    })