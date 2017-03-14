import React, { PropTypes } from "react";

import FlatButton from "material-ui/FlatButton";

const propTypes = {
  type: PropTypes.string,
  label: PropTypes.string
};

const BorderdButton = ({ type, label }) => (
  <div className="bordered-button">
    <FlatButton
      type={type}
      label={label}
      labelStyle={{ color: "white", width: "100%" }}
    />
    <style jsx>
      {
        `
      .bordered-button {
        border: 1px solid white;
        border-radius: 4px;
        display: inline-block;
      }
    `
      }
    </style>
  </div>
);

BorderdButton.propTypes = propTypes;

export default BorderdButton;
