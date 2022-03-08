const apiUrl = "https://jsonplaceholder.typicode.com/posts";
fetch(apiUrl)
    .then(function(response){
        return response.json();
    })
    .then(function(posts){
        let htmls = posts.map( post => 
            `<div>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>`)
        document.querySelector("#post-area").innerHTML = htmls.join("");
    })