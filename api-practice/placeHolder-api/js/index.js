// console.log('tinggggg')

// https://jsonplaceholder.typicode.com/posts

fetch('https://jsonplaceholder.typicode.com/posts')
.then(res => res.json())
.then(data => setPost(data))


const setPost = posts => {
    // console.log(posts);
    const postContainer = document.getElementById('post-container');
    posts.forEach(post => {
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `<div class=" p-5 bg-light border border-primary border-3 m-3">
        <h3>${post.title}</h3>
        <p>${post.body}</p>
        <p> Post no. ${post.id} <p/>
    
        </div>
        `
        postContainer.appendChild(postDiv);
    });
}