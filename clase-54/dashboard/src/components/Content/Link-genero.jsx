import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function GenreLink({ name }) {
  return (
    <Link to={`/generos/${name}`}>
      <button
        type="button"
        className="list-group-item list-group-item-action text-center"
      >
        {name}
      </button>
    </Link>
  );
}

GenreLink.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GenreLink;
