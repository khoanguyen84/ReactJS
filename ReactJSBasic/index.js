// const h1 = document.createElement("h1");
// h1.innerText = "Hello world";
// // h1.style = "color:red; background-color: green;"
// Object.assign(h1.style, {
//     color: "red",
//     backgroundColor:"blue"
// })
// h1.id = "heading1";
// const root = document.querySelector("#root");
// root.appendChild(h1);

// const div = document.createElement("div");
// div.className = "post-item";
// const h2 = document.createElement("h2");
// h2.title = "Học React tại F8";
// h2.innerText = "Học ReactJS";
// const p = document.createElement("p");
// p.innerText = "Học ReactJs từ cơn bản đến nâng cao";
// div.appendChild(h2);
// div.appendChild(p);
// document.querySelector("#root").appendChild(div);

// const div = React.createElement(
//             "div", 
//             {
//                 className : "post-item"
//             },
//             React.createElement("h2", {
//                 title: "Học React tại F8"
//             },
//             "Học ReactJs"),
//             React.createElement("p", null, "Học ReactJS từ cơ bản đên nâng cao")
//             );
// ReactDOM.render(div, document.querySelector("#root"));

// const ulReact = React.createElement(
//     "ul",
//     {
//         id: "ulId",
//         style: {color:"red", fontSize: "30px"}
//     },
//     React.createElement("li", null, "JavaScript"),
//     React.createElement("li", null, "ReactJS")
// )
const reactCourse = "ReactJS F8"
const courses = [
    {
        name: "HTML/CSS"
    },
    {
        name: "Responsive Web Design"
    },
    {
        name: "ReactJS"
    },
]
const ul = <ul className="courses-list">
                <li style={{ color: "red", backgroundColor: "green" }}>JavaScript</li>
                <li>{reactCourse}</li>
            </ul>
ReactDOM.render(ul, document.querySelector("#root"));
