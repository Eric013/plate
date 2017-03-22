import BackArrow from "material-ui/svg-icons/navigation/arrow-back";
import IconButton from "material-ui/IconButton";
import React from "react";

const BackButton = () => {
  return (
    <div>
      <a onClick={() => window.history.back()}>
        <IconButton
          iconStyle={{ color: "white" }}
          tooltip="Back"
          tooltipPosition="bottom-center"
        >
          <BackArrow />
        </IconButton>
      </a>
    </div>
  );
};

export default BackButton;
