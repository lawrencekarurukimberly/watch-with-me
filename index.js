const API_KEY = "5743c14b8563d4bb5435a0725725c5e9";
const BASE_URL = "https://api.themoviedb.org/3";
let currentMovie = {};

if (!localStorage.getItem("loggedInUser")) {
    window.location.href = "login.html";
}

async function fetchMovieDetails(movieId) {
    const url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;

    try {
        const response = await fetch(url);
        const movie = await response.json();

        if (!movie || movie.success === false) {
            console.error("Movie not found!");
            return;
        }

        document.getElementById("movie-title").innerText = movie.title;
        document.getElementById("movie-poster").src = `https://image.tmdb.org/t/p/w300${movie.poster_path}`;
        document.getElementById("movie-overview").innerText = movie.overview;

        currentMovie = {
            id: movie.id,
            title: movie.title,
            poster: `https://image.tmdb.org/t/p/w300${movie.poster_path}`,
            overview: movie.overview
        };

    } catch (error) {
        console.error("Error fetching movie details:", error);
    }
}

function saveMovieToMySpace() {
    if (Object.keys(currentMovie).length > 0) {
        let savedMovies = JSON.parse(localStorage.getItem("savedMovies")) || [];

        if (!savedMovies.some(movie => movie.id === currentMovie.id)) {
            savedMovies.push(currentMovie);
            localStorage.setItem("savedMovies", JSON.stringify(savedMovies));
            alert("Movie saved to My Space!");
        } else {
            alert("This movie is already in My Space.");
        }
    } else {
        alert("No movie selected!");
    }
}

// Function to handle image click events
function attachImageClickEvents() {
    document.querySelectorAll(".image-gallery img").forEach(img => {
        img.addEventListener("click", () => {
            const movieId = img.getAttribute("data-movie-id"); // Get movie ID
            if (movieId) {
                fetchMovieDetails(movieId);
            } else {
                console.error("No movie ID found for this image.");
            }
        });
    });
}

// Ensure DOM is fully loaded before adding event listeners
document.addEventListener("DOMContentLoaded", () => {
    attachImageClickEvents();

    // Ensure the save button exists before adding event listener
    const saveButton = document.getElementById("save-button");
    if (saveButton) {
        saveButton.addEventListener("click", saveMovieToMySpace);
    } else {
        console.error("Save button not found!");
    }
});
