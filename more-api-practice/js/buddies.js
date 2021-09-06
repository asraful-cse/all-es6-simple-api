function loadBuddies() {
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayBuddies(data))
}
loadBuddies()

function displayBuddies(data) {
    console.log(data.results);
    const buddies = data.results;
    const buddiesDiv = document.getElementById('buddies-container')
    for (const buddie of buddies) {
        // console.log(buddie);
      const  p = document.createElement('p');
        p.style.textAlign = 'center';
        p.style.backgroundColor = 'yellow'
        p.innerText = `Title: ${buddie.name.title} ${buddie.name.first} ${buddie.name.last} email : ${buddie.email}`;
        buddiesDiv.appendChild(p);
    }
}