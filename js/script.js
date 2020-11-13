document.addEventListener("DOMContentLoaded", function() {

    let home_url = "http://127.0.0.1:5500/Learning/Filmy%20v2/index.html";
    let movie_url = "http://127.0.0.1:5500/Learning/Filmy%20v2/movie.html";
    let logo = document.querySelector("#logo");
    logo.addEventListener("click", function() {
        if (window.location.href !== home_url) {
            window.location.href = home_url;
        }
    });

    let moviePosters = document.querySelectorAll(".film-image");
    moviePosters.forEach(function(poster) {
        poster.addEventListener("click", function(e) {


            let parent = poster.parentNode;

            const movie = {
                title: parent.querySelector(".film-title").innerText,
                full_title: parent.querySelector(".full-title").innerText,
                poster_url: parent.querySelector(".film-image").getAttribute("src"),
                genre_year: parent.querySelector(".genre-year").innerText,
                story_line: parent.querySelector(".desc").innerText,
                trailer_url: parent.querySelector(".trailer-url").innerText
            }

            localStorage.setItem("movie", JSON.stringify(movie));
            window.location.href = movie_url;
        });
    });

    let movieTitles = document.querySelectorAll(".film-title");
    movieTitles.forEach(function(title) {
        title.addEventListener("click", function() {
            let parent = title.parentNode;

            const movie = {
                title: parent.querySelector(".film-title").innerText,
                full_title: parent.querySelector(".full-title").innerText,
                poster_url: parent.querySelector(".film-image").getAttribute("src"),
                genre_year: parent.querySelector(".genre-year").innerText,
                story_line: parent.querySelector(".desc").innerText,
                trailer_url: parent.querySelector(".trailer-url").innerText
            }

            localStorage.setItem("movie", JSON.stringify(movie));
            window.location.href = movie_url;
        });
    });

});