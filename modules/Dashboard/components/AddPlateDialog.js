import { Field, reduxForm } from "redux-form";
import React, { PropTypes } from "react";

import Dialog from "material-ui/Dialog";
import FlatButton from "material-ui/FlatButton";
import TextField from "material-ui/TextField";

const validate = values => {
  const errors = {};
  if (!values.name) {
    errors.name = "Please enter a plate name";
  }
  if (!values.description) {
    errors.description = "Please enter a plate description";
  }
  return errors;
};

const RenderTextField = props => {
  const { input, label, meta: { touched, error }, ...custom } = props;
  return (
    <TextField
      hintText={label}
      autoComplete={"off"}
      errorText={touched && error}
      fullWidth
      {...input}
      {...custom}
    />
  );
};

const confirmAddPlate = (addPlate, closeDialog) => {
  const plateName = document.getElementById("name").value;
  const plateDescription = document.getElementById("description").value;

  const plateColors = [
    "/static/img/taskIcon/taskIconBlue.png",
    "/static/img/taskIcon/taskIconGreen.png",
    "/static/img/taskIcon/taskIconOrange.png",
    "/static/img/taskIcon/taskIconPink.png",
    "/static/img/taskIcon/taskIconRed.png",
    "/static/img/taskIcon/taskIconYellow.png"
  ];

  const colorNumber = Math.floor(Math.random() * 6);

  addPlate(plateName, plateDescription, plateColors[colorNumber]);
  closeDialog();
};

const AddPlateDialog = props => {
  const { open, closeDialog, addPlate, handleSubmit } = props;

  const actions = [
    <FlatButton
      label="Cancel"
      type="button"
      secondary
      onTouchTap={closeDialog}
    />,
    <FlatButton label="Add Plate" form="plateForm" primary type="submit" />
  ];

  return (
    <Dialog
      title="Add A New Plate"
      modal={false}
      open={open}
      actions={actions}
      onRequestClose={closeDialog}
      contentStyle={{ width: "95%" }}
    >
      <form
        id="plateForm"
        onSubmit={handleSubmit(() => confirmAddPlate(addPlate, closeDialog))}
      >
        <Field
          name="name"
          id="name"
          component={RenderTextField}
          type="text"
          label="Name"
        />
        <Field
          name="description"
          id="description"
          component={RenderTextField}
          type="text"
          label="Description"
          rows={4}
          rowsMax={4}
          multiLine
        />
      </form>
    </Dialog>
  );
};

RenderTextField.propTypes = {
  label: PropTypes.string,
  meta: PropTypes.object,
  input: PropTypes.object
};

AddPlateDialog.propTypes = {
  open: PropTypes.bool,
  closeDialog: PropTypes.func,
  addPlate: PropTypes.func,
  handleSubmit: PropTypes.func
};

export default reduxForm({
  form: "addPlateForm",
  validate
})(AddPlateDialog);
