document.addEventListener("DOMContentLoaded", () => {
    const savedMovie = JSON.parse(localStorage.getItem("savedMovie"));

    if (savedMovie) {
        document.getElementById("saved-title").innerText = savedMovie.title;
        document.getElementById("saved-poster").src = savedMovie.poster;
        document.getElementById("saved-overview").innerText = savedMovie.overview;
    }
});
