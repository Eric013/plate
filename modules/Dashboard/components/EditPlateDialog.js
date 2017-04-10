// @flow

import { Field, reduxForm } from 'redux-form';

import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import React from 'react';
import RenderTextField from '../util/RenderTextField';
import { editPlateValidations } from '../util/validations';

type Props = {
  editPlateOpen: boolean,
  editPlateHandleClose: Function,
  plateId: string,
  plateName: string,
  plateDescription: string,
  editPlate: Function,
  handleSubmit: Function
};

const editPlateDetails = (id, editPlate, editPlateHandleClose) => {
  const newPlateName = document.getElementById('currentPlateName').value;
  const newPlateDescription = document.getElementById(
    'currentPlateDescription'
  ).value;

  editPlate(id, newPlateName, newPlateDescription);
  editPlateHandleClose();
};

const EditPlateDialog = (
  {
    editPlateOpen,
    editPlateHandleClose,
    plateId,
    plateName,
    plateDescription,
    editPlate,
    handleSubmit
  }: Props
) => {
  const actions = [
    <FlatButton label="Cancel" onTouchTap={editPlateHandleClose} primary />,
    <FlatButton label="Submit" form="editPlateForm" secondary type="submit" />
  ];

  return (
    <Dialog
      actions={actions}
      modal={false}
      open={editPlateOpen}
      onRequestClose={editPlateHandleClose}
      contentStyle={{ width: '95%' }}
    >
      <h3 style={{ marginBottom: 10 }}>Edit Plate</h3>
      <form
        id="editPlateForm"
        onSubmit={handleSubmit(() =>
          editPlateDetails(plateId, editPlate, editPlateHandleClose))}
      >
        <span style={{ marginRight: 10 }}>Name:</span>
        <Field
          name="currentPlateName"
          id="currentPlateName"
          component={RenderTextField}
          type="text"
          label={plateName}
          style={{ marginBottom: 20 }}
        />
        <span style={{ marginRight: 10 }}>Description:</span>
        <Field
          name="currentPlateDescription"
          id="currentPlateDescription"
          component={RenderTextField}
          type="text"
          label={plateDescription}
        />
      </form>
    </Dialog>
  );
};

export default reduxForm({
  form: 'editPlateForm',
  validate: editPlateValidations
})(EditPlateDialog);
