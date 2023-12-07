import MoviesSearchResult from "./MoviesSearchResult";
import SearchWrap from "./Search-wrap";

function MoviesSearch() {
  const movies = [
    {
      Title: "Saving Private Ryan",
      Year: "1998",
      imdbID: "tt0120815",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZjhkMDM4MWItZTVjOC00ZDRhLThmYTAtM2I5NzBmNmNlMzI1XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
    },
    {
      Title: "Tom Clancy's Jack Ryan",
      Year: "2018–2023",
      imdbID: "tt5057054",
      Type: "series",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BODU0MmZjYjktOGQ4MS00N2QwLTk5MzQtYTRkMGRiM2Q4ZjViXkEyXkFqcGdeQXVyMjkwOTAyMDU@._V1_SX300.jpg",
    },
    {
      Title: "Jack Ryan: Shadow Recruit",
      Year: "2014",
      imdbID: "tt1205537",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTY2MDkxNzYwNl5BMl5BanBnXkFtZTgwOTM2MjE5MDE@._V1_SX300.jpg",
    },
    {
      Title: "Jackie & Ryan",
      Year: "2014",
      imdbID: "tt3270108",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5NTEwNTI4NV5BMl5BanBnXkFtZTgwNDE3OTU5NTE@._V1_SX300.jpg",
    },
  ];

  return (
    <>
      <SearchWrap />
      <MoviesSearchResult movies={movies} />
    </>
  );
}

export default MoviesSearch;
