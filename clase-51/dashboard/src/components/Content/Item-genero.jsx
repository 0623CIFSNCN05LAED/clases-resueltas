import PropTypes from "prop-types";

function GenreItem({ name }) {
  return (
    <button
      type="button"
      className="list-group-item list-group-item-action text-center"
    >
      {name}
    </button>
  );
}

GenreItem.propTypes = {
  name: PropTypes.string.isRequired,
};

export default GenreItem;
