const $ = document.querySelector.bind(document);

const apiUrl = "https://616e3eb5a83a850017caa8a6.mockapi.io/products"
function loadData() {
    fetch(apiUrl, {
        method: "GET"
    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            return data.sort(function (pdt1, pdt2) {
                return Number(pdt2.id) - Number(pdt1.id);
            })
        })
        .then(function (data) {
            let htmls = data.map(function (product) {
                return `
                <div style="width:170px; float:left;">
                    <img style="width:100px; height:100px;" src=${product.Photo} />
                    <h4>${product.id}. ${product.ProductName}</h4>
                    <p>${product.Price} đ</p>
                </div>
            `
            })
            document.querySelector('#product-area').innerHTML = htmls.join("")
        })
}

function save() {
    let data = {
        ProductName: $('#ProductName').value,
        Price: $('#Price').value,
        Quantity: Number($('#Quantity').value),
        Manufactory: $('#Manufactory').value,
        Status: $('#Status').checked,
        Photo: "http://placeimg.com/640/480/food",
    }
    fetch(apiUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json())
        .then(data => {
            if (data != null) {
                // loadData();
                insertBeforeFirstNode($("#product-area"), data);
                clearForm();
            }
        })
}
function insertBeforeFirstNode(parent, data){
    const div = document.createElement("div");
    div.style.width = "170px"
    div.style.float = "left";
    const img = document.createElement("img");
    img.style.width = "100px";
    img.style.height ="100px";
    img.src = data.Photo
    div.appendChild(img);
    const h4 = document.createElement("h4");
    h4.innerHTML = `${data.id}. ${data.ProductName}`;
    div.appendChild(h4);
    const p = document.createElement("p");
    p.innerText = `${data.Price}`;
    div.appendChild(p);
    // parent.appendChild(div);
    parent.insertBefore(div, parent.firstChild);
}
function clearForm() {
    $('#ProductName').value = "";
    $('#Price').value = "";
    $('#Quantity').value = "";
    $('#Manufactory').value = "";
    $('#Status').checked = false;
    $('#Photo').value = "";
}
(function ready() {
    loadData();
})()
// fetch(apiUrl)
//     .then(response => response.json())
//     .then( data => {
//         let htmls = data.map(product =>
//             `
//                 <div>
//                     <img style="width:100px; height:100px;" src=${product.Photo} />
//                     <h4>${product.ProductName}</h4>
//                     <p>${product.Price} đ</p>
//                 </div>
//             `)
//         document.querySelector('#product-area').innerHTML = htmls.join("")
//     })