document.addEventListener("DOMContentLoaded", function() {


    let movieObject = "";
    let movie = localStorage.getItem("movie");
    if (movie) {
        movieObject = JSON.parse(movie);
    }
    let poster = document.querySelector(".film-image");
    let full_title = document.querySelector("#movie-name");
    let genre_year = document.querySelector("#movie-genre-year");
    let desc = document.querySelector("#movie-desc");
    let trailer = document.querySelector("#trailer");

    poster.setAttribute("src", movieObject.poster_url);
    full_title.innerText = movieObject.full_title;
    genre_year.innerText = movieObject.genre_year;
    desc.innerText = movieObject.story_line;
    trailer.setAttribute("src", movieObject.trailer_url);

    let title = document.querySelector("#pageTitle");
    title.innerText = movieObject.title + ' | Filmy';
});