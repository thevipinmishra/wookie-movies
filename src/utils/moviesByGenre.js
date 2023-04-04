import { axiosInstance } from "../axios.instance";

export const getMoviesByGenre = async () => {
  const res = await axiosInstance.get("/movies");

  const movies = res.data.movies;

  const genres = [...new Set(movies.map((item) => item.genres).flat())];

  const moviesByGenre = [...new Set(movies.map((item) => item.genres).flat())]
    .map((item) => movies.filter((movie) => movie.genres.includes(item)))
    .map((item, index) => {
      return {
        genre: genres[index],
        movies: item,
      };
    });

  return { movies, moviesByGenre };
};
