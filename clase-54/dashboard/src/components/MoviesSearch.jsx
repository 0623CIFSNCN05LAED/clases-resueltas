import { useState } from "react";
import MoviesSearchResult from "./MoviesSearchResult";
import SearchWrap from "./Search-wrap";

function MoviesSearch() {
  const [movies, setMovies] = useState(null);

  return (
    <>
      <SearchWrap setMovies={setMovies} />
      <MoviesSearchResult movies={movies} />
    </>
  );
}

export default MoviesSearch;
