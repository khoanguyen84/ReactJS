// const sum = function(a, b){
//     return a + b;
// }

// const sum = (a, b) => {
//     return a + b;
// }
// const sum = (a, b) => a + b;
//console.log(sum(1,2))

// const showMessage = function(message){
//     console.log("Message: ", message)
// }
// const showMessage = message => console.log("Message: ", message)
// showMessage("success")


// const getInfo = function(){
//     return {
//         name: "Khoa",
//         age: 18
//     }
// }
// const getInfo = () => {
//     return {
//             name: "Khoa",
//             age: 18,
//         }
// }
const getInfo = () => ({name: "Khoa", age: 18})
console.log(getInfo())