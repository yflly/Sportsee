import React from "react";
import PropTypes from "prop-types";
import "./CardInfo.css";

function CardInfo({ data, unit, image, alt, text }) {
  return (
    <div className="containerCardInfo">
      <div className={"containerCardInfoIcon" + text}>
        <img src={image} alt={alt} />
      </div>
      <div className="containerCardInfoText">
        <h3>
          {data}
          {unit}
        </h3>
        <p>{text}</p>
      </div>
    </div>
  );
}

CardInfo.propTypes = {
  data: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  alt: PropTypes.string,
  text: PropTypes.string.isRequired,
};

export default CardInfo;
