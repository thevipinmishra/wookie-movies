import { useState, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";

import { axiosInstance } from "./axios.instance";
import MovieCard from "./components/MovieCard";
import Nav from "./components/Nav";

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [moviesByGenre, setMoviesByGenre] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    axiosInstance
      .get("/movies")
      .then((res) => {
        setMovies(res.data.movies);

        setGenres([
          ...new Set(res.data.movies.map((item) => item.genres).flat()),
        ]);

        setMoviesByGenre(
          [...new Set(res.data.movies.map((item) => item.genres).flat())]
            .map((item) =>
              movies.filter((movie) => movie.genres.includes(item))
            )
            .map((item, index) => {
              return {
                genre: genres[index],
                movies: item,
              };
            })
        );

        setLoading(false);
      })
      .catch((error) => console.log(`Error -  ${error}`));
  }, []);

  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <div className="App">
      {loading ? (
        <Box sx={{ textAlign: "center" }}>
          <CircularProgress />
          <Typography>Loading Movies...</Typography>
        </Box>
      ) : (
        <Box>
          <Nav searchValue={searchValue} setSearchValue={handleSearchChange} />
          {!searchValue ? (
            <Box>
              <Box mb={4}>
                <Typography variant="h4">Movies by Genre</Typography>
              </Box>
              {moviesByGenre.map((item, index) => (
                <Box className="movie-by-genre" key={index}>
                  <Typography className="genre-title" variant="h5">
                    {item.genre}
                  </Typography>

                  <Box className="card-row">
                    {item.movies.map((movie) => (
                      <MovieCard movie={movie} key={movie.id} />
                    ))}
                  </Box>
                </Box>
              ))}
            </Box>
          ) : (
            <div className="card-row">
              <Box sx={{ flexBasis: "100%" }}>
                <Typography variant="h4">
                  Search Results for: {searchValue}
                </Typography>
              </Box>

              {movies
                .filter((movie) =>
                  movie.title.toLowerCase().includes(searchValue.toLowerCase())
                )
                .map((movie) => (
                  <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
          )}
        </Box>
      )}
    </div>
  );
}

export default App;
