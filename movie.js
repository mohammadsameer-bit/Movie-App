const url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
let inputValue = document.getElementById("searchInput");
let submit = document.getElementById('sbbtn');
let movieCards = document.querySelector(".moviecards");
let imgUrl = "https://image.tmdb.org/t/p/w1280";
const getData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data)
        if (data.page = 1) {
            let number = data.results;
            let lengt = number.length - 1;
            for (let i = 0; i <= lengt; i++) {
                let card = document.createElement('div');
                card.setAttribute("class", "card");
                movieCards.append(card);
                    let moviePath = number.poster_path;
                    let img = document.createElement('img');
                    img.src = imgUrl+moviePath;
                    card.appendChild(img);
                    let title = document.createElement("h2");
                    title.style.color = "white";
                    title.innerText = data.results[i].title;
                    card.appendChild(title);
                    let p = document.createElement('p');
                    p.style.color = "white";
                    p.innerText = "Overview:"+"  "+data.results[i].overview;
                    p.style.fontSize = "18px";
                    card.appendChild(p);
                    let releaseDate = document.createElement("h3");
                    releaseDate.style.color = "white";
                    releaseDate.innerText = "Release-Date:"+" "+data.results[i].release_date;
                    card.appendChild(releaseDate);
            }
        }

        }
     catch (error) {
            console.log(error);
        }
        finally {
            console.log('all done');
        }
    }
getData();



