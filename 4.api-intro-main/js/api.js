function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => console.log(data))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data));
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => console.log(data));
}

function displayUsers(data) {
    const ul = document.getElementById('users');
    // console.log(data);
    for (const user of data) {
        console.log(user);
        const li = document.createElement('li');
        li.innerText = `name: ${user.name} email: ${user.email}`;
        ul.appendChild(li);
    }
}










// my practice...... 



function loadData(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data.title))

}

function loadUser() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => newLoadUser(data))
}

// loadUser()
function newLoadUser(data) {
// console.log(data)
const container = document.getElementById('body-title');
for (const user of data) {
    console.log(user.title)
    div = document.createElement('div');
    div.classList.add('post');
    div.innerHTML = `<h1> title: ${user.title} </h1>
    <p> body: ${user.body} </p>`;
    container.appendChild(div);
}
}


const premikas= { name: 'keka ferdousi' , 
cars: { brand: 'toyota'} }