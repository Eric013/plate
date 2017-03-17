import React, { PropTypes } from "react";

import Dialog from "material-ui/Dialog";
import ErrorIcon from "material-ui/svg-icons/alert/error";
import FlatButton from "material-ui/FlatButton";
import IconButton from "material-ui/IconButton";
import { red500 } from "material-ui/styles/colors";

const styles = {
  largeIcon: {
    width: 80,
    height: 80,
    color: red500
  },
  large: {
    width: 120,
    height: 120,
    padding: 20
  }
};

const removePlates = (closeDialog, removeAllPlates, refetch) => {
  removeAllPlates();
  closeDialog();
  refetch();
};

const RemoveAllPlatesDialog = (
  { open, closeDialog, removeAllPlates, refetch }
) => {
  const actions = [
    <FlatButton label="Cancel" primary onTouchTap={closeDialog} />,
    <FlatButton
      label="Remove All"
      primary
      onTouchTap={() => removePlates(closeDialog, removeAllPlates, refetch)}
    />
  ];

  return (
    <div>
      <Dialog
        modal={false}
        open={open}
        actions={actions}
        onRequestClose={closeDialog}
        contentStyle={{ width: "95%" }}
      >
        <div className="center-container">
          <IconButton iconStyle={styles.largeIcon} style={styles.large}>
            <ErrorIcon />
          </IconButton>
          <p>Are you sure you want to remove all plates?</p>
        </div>
      </Dialog>
      <style jsx>
        {
          `
        .center-container {
          text-align: center;
        }
      `
        }
      </style>
    </div>
  );
};

RemoveAllPlatesDialog.propTypes = {
  open: PropTypes.bool,
  closeDialog: PropTypes.func,
  removeAllPlates: PropTypes.func,
  refetch: PropTypes.func
};

export default RemoveAllPlatesDialog;
