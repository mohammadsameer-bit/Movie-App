const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const imgPath = "https://image.tmdb.org/t/p/w1280";
const searchApi = "https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=";
const searchInput = document.getElementById("searchInput");
const container = document.querySelector('.container');
const form = document.querySelector("form");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    let searchValue=searchInput.value;
    let URL = searchApi + searchValue;
    if(searchValue != "") {
        getData(URL,renderMovies);
        searchInput.value="";
    }
})


const getData = async (url,callback) => {
    let response = await fetch(url);
    let data = await response.json();
    callback(data.results);
}
const renderMovies = (movie) => {
    container.innerHTML = "";
    movie.forEach((movies) => {
        let result = movies;
        let movieCards = document.createElement('div');
        movieCards.classList.add("movieCards");
        movieCards.innerHTML = `
    <img src= "${imgPath + result.poster_path}"/>
    <h2> ${result.title}</h2>
    <p>Overview:<br><br>${result.overview}</p>
    <div class="rating">
    Rating : ${result.vote_average.toFixed(1)}/10
    </br>
    </br>
    Release Date:-${result.release_date}
    </div>
    `
        container.append(movieCards);
    });

}
getData(url,renderMovies);