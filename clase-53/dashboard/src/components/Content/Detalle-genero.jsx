import { Component } from "react";
import PropTypes from "prop-types";

class GenreDetail extends Component {
  constructor({ match }) {
    super();
    const { name } = match.params;

    this.state = {
      name: name,
    };
  }

  componentDidUpdate() {
    const { name } = this.props.match.params;
    if (this.state.name !== name) {
      this.setState({
        name: name,
      });
    }
  }

  render() {
    return <h3>{this.state.name}</h3>;
  }
}

GenreDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default GenreDetail;
