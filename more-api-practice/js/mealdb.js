const searchFood = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    searchField.value = '';
    // console.log(searchText);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
};


const displaySearchResult = meals => {
    // console.log(meals)
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    if (meals.length == 0) {
        // console.log('its not found');
        document.getElementById("error-message").innerHTML =
      "<p class='text-center p-3 bg-danger'><b>Please enter a meal name...</b></p>";
    }
    else{
        meals.forEach(meal => {
            // console.log(meal);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
           <div onclick="loadMealDetail('${meal.idMeal}')" class="card h-100 ">
               <img src="${meal.strMealThumb}" class="card-img-top " alt="...">
              <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p  class="card-text">${meal.strInstructions.slice(0, 300)}
                    </p>
              </div>
              <button class="bg-success">Details</button>
           </div>
        `
        searchResult.appendChild(div);
        })
    }
  
};

const loadMealDetail = mealId =>{
    window.scrollTo(0, 40);
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
fetch(url)
.then(res => res.json())
.then(data => displayMealDetail(data.meals[0]))
};

const displayMealDetail = meal=> {
    const mealDetails = document.getElementById('meal-details');
    console.log(meal);
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top " alt="...">
    <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p  class="card-text">${meal.strInstructions.slice(0, 300)}</p>
          <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
   
   
    `
    mealDetails.appendChild(div);
}
