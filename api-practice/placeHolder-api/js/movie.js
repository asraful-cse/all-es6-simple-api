// fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=f96ac62d92ada173838748fa0f087eef")
// .then(res => res.json())
// .then(data => console.log(data))

const loadMovies = () => {
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=f96ac62d92ada173838748fa0f087eef")
        .then(res => res.json())
        .then(data => setMovies(data.results))
}

loadMovies()