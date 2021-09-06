const loadCountries = () =>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}
loadCountries()

const displayCountries = countries => {
    // console.log(countries);
    const countriesDiv = document.getElementById('countries')
    countries.forEach(countrie => {
        // console.log(countrie.name)   
        const div = document.createElement('div');
        div.classList.add('countrie')
        // const h3 = document.createElement('h3');
        // h3.innerText = countrie.name;
        // div.appendChild(h3);
        // const p = document.createElement('p');
        // p.innerText = countrie.capital;
        // div.appendChild(p);
        div.innerHTML = `
        <h3>${countrie.name}</h3>
        <p>${countrie.capital}</p>
        <button onclick="loadCoutryByName('${countrie.name}')">details</button>`       // js er vetore htm a dynamic vabe '' er vetore dite hoi..
        countriesDiv.appendChild(div);

        
    });
}


const loadCoutryByName = (name) => {
// console.log(name);
const url = `https://restcountries.eu/rest/v2/name/${name}`
// console.log(url)
fetch(url)
.then(res => res.json())
.then(data => displayCountryDetails(data[0]))          // .then(data => console.log(data[0])) jeheto arry er vetore object and 0 index 
}


const displayCountryDetails = (data) =>{
// console.log(data);
const countriesDetailsDiv = document.getElementById('countries-details');
countriesDetailsDiv.innerHTML = `
<h3>${data.name}</h3>
<p>${data.population}</p>
<img width="200px" src="${data.flag}" alt="">
`
}


// const bondCode=` I am Fake James bond . My new code is: 00${7+1+2}`;
// console.log(bondCOde);