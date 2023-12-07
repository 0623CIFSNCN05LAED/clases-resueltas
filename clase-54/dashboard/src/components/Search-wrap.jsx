/* eslint-disable react/prop-types */
import { useRef } from "react";
import { searchApi } from "../api/searchApi";

function SearchWrap({ setMovies }) {
  const iconStyle = {
    fontSize: "1.5rem",
    color: "cornflowerblue",
  };

  const searchInput = useRef();

  async function search() {
    const searchText = searchInput.current.value;
    if (searchText.length > 5) {
      const foundMovies = await searchApi(searchText);
      setMovies(foundMovies);
    }
  }

  return (
    <aside className="search-wrap">
      <div className="search">
        <label htmlFor="search">
          <i className="bi bi-search" style={iconStyle}></i>
          <input ref={searchInput} type="text" id="search" onInput={search} />
          {/* <button onClick={search}>Buscar</button> */}
        </label>
      </div>
    </aside>
  );
}

export default SearchWrap;
