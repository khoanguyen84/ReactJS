// 1. Sync ==> đồng bộ
// 2. Async ==> bất đồng bộ

// callback hell

// setTimeout(function(){
//     console.log(1)
// }, 1000)
// console.log(2)

// setTimeout(function(){
//     console.log(1)
//     setTimeout(function(){
//         console.log(2)
//         setTimeout(function(){
//             console.log(3)
//         },1000)
//     }, 1000)
// }, 1000)


// promise chain
let promise = new Promise(
    //nghiệp vụ / logic
    //executor
    function (resolve, reject) {
        // resolve([1,2,3]);
        // resolve({
        //     name: "Khoa",
        //     age : 18,
        //     gender : "male"
        // });
        // reject("Thất bại");
        resolve(1)
    }
)
promise
    .then(function (number) {
        console.log(number)
        return number + 1;
    })
    .then(function (number) {
        console.log(number)
        return number + 1;
    })
    .finally(function () {
        console.log("Done")
    })

    // promise
    //     .then(function(obj){
    //         return {
    //             ...obj,
    //             email: "khoa@gmail.com"
    //         }
    //     })
    //     .then(function(data){
    //         console.log(data)
    //     })
    //     .catch(function(error){
    //         console.log(error)
    //     })
    //     .finally(function(){
    //         console.log("Done")
    //     })

    // IIFE ~ Immediately Invoked Function Expression

    // function logger(msg){
    //     console.log(msg)
    // }

    // logger("CodeGym")

    ; (function (msg) {
        console.log(msg)
    })("CodeGym")


    ; (function (a, b, c) {
        console.log(a + b + c)
    })(1, 2, 3)

let data = {
    productname: "Helen Carroll1222",
    price: "1000",
    manufactory: "Ut est soluta enim q222",
    status: false,
    quantity: "985"
}
fetch('https://6100c20bbca46600171cf995.mockapi.io/product', {
    method: 'POST', // or 'PUT'
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });

fetch('https://6100c20bbca46600171cf995.mockapi.io/product')
    .then(response => response.json())
    .then(json => {
        console.log('Success:', json);
    })
    .catch((error) => {
        console.error('Error:', error);
    });