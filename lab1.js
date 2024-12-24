
let movies = [
    { title: "3 Idiots", genre: "Comedy", rating: 8.4, releaseYear: 2009 },
    { title: "Lagaan", genre: "Drama", rating: 8.1, releaseYear: 2001 },
    { title: "Kabhi Khushi Kabhie Gham", genre: "Drama", rating: 7.4, releaseYear: 2001 },
    { title: "Zindagi Na Milegi Dobara", genre: "Adventure", rating: 8.1, releaseYear: 2011 }
  ];
  
  function addMovie(title, genre, rating, releaseYear) {
    const newMovie = { title, genre, rating, releaseYear };
    if (genre !== "Romance") {
      movies.push(newMovie);
      console.log(`Added new movie: ${title}`);
    }
  }
  
  function listMoviesByGenre(genre) {
    const filteredMovies = movies.filter(movie => movie.genre === genre);
    console.log(`Movies in genre "${genre}":`);
    filteredMovies.forEach(movie => {
      console.log(`- ${movie.title} (${movie.releaseYear})`);
    });
  }
  function findHighestRatedMovie() {
    const highestRatedMovie = movies.reduce((max, movie) => (movie.rating > max.rating ? movie : max), movies[0]);
    console.log(`Highest rated movie: ${highestRatedMovie.title} with a rating of ${highestRatedMovie.rating}`);
  }
  
  
  function listAllMovieTitles() {
    const titles = movies.map(movie => movie.title);
    console.log("All Bollywood movie titles:");
    titles.forEach(title => console.log(`- ${title}`));
  }
  
  function findMoviesAfterYear(year) {
    const filteredMovies = movies.filter(movie => movie.releaseYear > year);
    console.log(`Bollywood movies released after ${year}:`);
    filteredMovies.forEach(movie => {
      console.log(`- ${movie.title} (${movie.releaseYear})`);
    });
  }
  
  addMovie("Kabir Singh", "Romance", 7.1, 2019);
  addMovie("Drishyam", "Thriller", 8.2, 2015);
  listMoviesByGenre("Drama");
  findHighestRatedMovie();
  listAllMovieTitles();
  findMoviesAfterYear(2000);