// const ul = document.createElement("ul");
// const li1 = document.createElement("li");
// li1.innerText = "The HTML elements as objects";
// const li2 = document.createElement("li");
// li2.innerText = "The properties of all HTML elements";
// const li3 = document.createElement("li");
// li3.innerText = "The methods to access all HTML elements";
// const li4 = document.createElement("li");
// li4.innerText = "The events for all HTML elements";
// ul.appendChild(li1);
// ul.appendChild(li2);
// ul.appendChild(li3);
// ul.appendChild(li4);
// document.body.appendChild(ul);
// document.querySelector("body").appendChild(ul);

// const h1React = React.createElement("h1", 
//                                     {
//                                         className:"h1-react",
//                                         id: "h1Id",
//                                         name: "h1-name"
//                                     }, "Heading 1");
// console.log(h1React);
// const root = document.getElementById("root");
// ReactDOM.render(h1React, root)
// ReactDOM.render(h2React, root)

// const pReact = React.createElement(
//                                     "p",
//                                     {
//                                         style : {
//                                             color:"white",
//                                             backgroundColor: "green",
//                                             fontSize: "40px"
//                                         }
//                                     },
//                                     "CodeGym Huế")
// ReactDOM.render(pReact, root)

// const ulReact = React.createElement("ul", 
//             null,
//             React.createElement("li", null, "The HTML elements as objects"),
//             React.createElement("li", null, "The properties of all HTML elements"),
//             React.createElement("li", null, "The methods to access all HTML elements"),
//             React.createElement("li", null, "The events for all HTML elements"),
//             )
// ReactDOM.render(ulReact, root)

// JSX ~ JavaScript XML

// const product = React.createElement(
//     "div",
//     {
//         style: {
//             backgroundColor: "green",
//             color: "white"
//         }
//     },
//     React.createElement("h1", {
//         style: {
//             textDecoration: "underline"
//         }
//     }, "Áo thun"),
//     React.createElement("img", {
//         src: "https://i.pravatar.cc/150?img=4",
//         style: {
//             borderRadius: "50%"
//         }
//     }, null),
//     React.createElement("p", null, "200.000 đ")
// )
const products = [
    {
        name: "Áo thun",
        photo : "https://i.pravatar.cc/150?img=4",
        price : "200.0000đ"
    },
    {
        name: "Quần jean",
        photo : "https://i.pravatar.cc/150?img=5",
        price : "200.0000đ"
    },
    {
        name: "Áo sơ mi",
        photo : "https://i.pravatar.cc/150?img=6",
        price : "200.0000đ"
    },
]
const product = <div className="product-item">
                    {
                        products.map((product, index) => (
                            <div key = {index}>
                                <h1>{product.name}</h1>
                                <img src= {product.photo} />
                                <p>{product.price}</p>
                            </div>
                        ))
                    }
                </div>
ReactDOM.render(product, root)