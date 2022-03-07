import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./LeftNavIcon.css";

class LeftNavIcon extends Component {
  render() {
    const { src } = this.props;
    return (
      <Link to="/" className="linkLeftNavIcon">
        <img src={src} alt="IconLeftNav" className="iconLeftNav" />
      </Link>
    );
  }
}
LeftNavIcon.propTypes = {
  src: PropTypes.string.isRequired,
};

export default LeftNavIcon;
