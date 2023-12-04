
function SearchWrap(){
  const iconStyle = {
    fontSize: "1.5rem",
    color: "cornflowerblue",
  };

  return (
    <aside className="search-wrap">
      <div className="search">
        <label htmlFor="search">
          <i className="bi bi-search" style={iconStyle}></i>
          <input type="text" id="search" />
        </label>
      </div>

      <div className="user-actions">
        <button>
          <a href="#">
            <i className="bi bi-person-add" style={iconStyle}></i>
          </a>
        </button>
        <button>
          <a href="#">
            <i className="bi bi-person" style={iconStyle}></i>
          </a>
        </button>
        <button>
          <a href="#">
            <i className="bi bi-box-arrow-right" style={iconStyle}></i>
          </a>
        </button>
      </div>
    </aside>
  );
}

export default SearchWrap