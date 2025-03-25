const apiKey = "YOUR_TMDB_API_KEY"; // Replace with your actual TMDB API Key
const movies = [
    "Free Guy",
    "Jumanji Next Level",
    "IT Chapter 2",
    "Encanto",
    "Frozen 2",
    "The Best Movie Ever",
    "Transformers",
    "Spider-Man No Way Home",
    "The Batman",
    "Doctor Strange in the Multiverse of Madness"
];

async function fetchMovieData(title) {
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${encodeURIComponent(title)}`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        if (data.results.length > 0) {
            return data.results[0]; // Return the first search result
        } else {
            return null; // Movie not found
        }
    } catch (error) {
        console.error("Error fetching movie data:", error);
        return null;
    }
}

async function displayMovies() {
    const gallery = document.getElementById("movie-gallery");

    for (const movieTitle of movies) {
        const movie = await fetchMovieData(movieTitle);

        if (movie) {
            const movieCard = document.createElement("div");
            movieCard.classList.add("movie-card");

            movieCard.innerHTML = `
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
                <div class="movie-title">${movie.title}</div>
                <div class="movie-desc">${movie.overview}</div>
            `;

            gallery.appendChild(movieCard);
        }
    }
}

displayMovies();