import PropTypes from "prop-types";

const SmallCard = ({ icon, color, value, title }) => {
  return (
    <div className="info-box">
      <div className="box-icon">
        <i
          className={icon}
          style={{
            fontSize: "1.5rem",
            color: color,
          }}
        ></i>
      </div>

      <div className="box-content">
        <span className="big">{value}</span>
        {title}
      </div>
    </div>
  );
};

SmallCard.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};

export default SmallCard;
