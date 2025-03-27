const API_KEY = "5743c14b8563d4bb5435a0725725c5e9";
const BASE_URL = "https://api.themoviedb.org/3";
let currentMovie = {};

// Redirect to login if no user is logged in
if (!localStorage.getItem("loggedInUser")) {
    window.location.href = "login.html";
}

// Function to fetch and display movie details
async function fetchMovieDetails(movieId) {
    const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const movie = await response.json();

        // Update movie details on the page
        document.getElementById("movie-title").innerText = movie.title;
        document.getElementById("movie-poster").src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
        document.getElementById("movie-overview").innerText = movie.overview;

        // Save current movie details
        currentMovie = {
            title: movie.title,
            poster: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
            overview: movie.overview
        };
    } catch (error) {
        console.error("Error fetching movie details:", error);
    }
}

// Attach event listeners to images
document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".image-gallery img").forEach(img => {
        img.addEventListener("click", () => {
            const movieId = img.getAttribute("data-movie-id"); // Get movie ID
            fetchMovieDetails(movieId);
        });
    });

    // Save movie to My Space Page
    document.getElementById("save-button").addEventListener("click", () => {
        if (Object.keys(currentMovie).length > 0) {
            let savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || [];
            savedMovies.push(currentMovie);
            localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
            alert("Movie saved to My Space Page!");
        }
    });
});
