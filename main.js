//  GET REQUEST
function getPosts(id) {
    let request = new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/posts?userId=" + id)
    request.responseType = "json"
    request.send()
    request.onload = function (){

        if(request.status >= 200 && request.status < 300) {
            let posts = request.response;
            document.querySelector(".title").innerHTML =""
            for(post of posts) {
                let containPosts = `
                    <div class="content">
                        <h3>${post.title}</h3>
                        <hr>
                        <h4>${post.body}</h4>
                    </div>
                `

                document.querySelector(".title").innerHTML += containPosts
            }
        }else{
            alert("Error")
        }
    }
}
getPosts(1)

function getUsers() {
    let request = new XMLHttpRequest()
    request.open("GET","https://jsonplaceholder.typicode.com/users")
    request.responseType = "json"
    request.send()
    request.onload = function (){

        if(request.status >= 200 && request.status < 300) {
            let users = request.response;
            document.querySelector(".users").innerHTML =""
            for(user of users) {
                let containUser = `
                <div id="user" onclick="clicked(${user.id}, this)">
                    <h2>${user.name}</h2>
                    <p>${user.email}</p>
                    <p>${user.website}</p>
                </div>
                `

                document.querySelector(".users").innerHTML += containUser
            }
        }else{
            alert("Error")
        }
    }
}
getUsers()
function clicked(userId, select) {
    getPosts(userId)

    let removeSelected = document.getElementsByClassName("selected")
    for(removeSelect of removeSelected){
        removeSelect.classList.remove("selected")
    }
    select.classList.add("selected")
}