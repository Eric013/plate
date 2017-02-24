import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import TextField from 'material-ui/TextField'

export default ({ open, openDialog, closeDialog }) => {
  const actions = [
    <FlatButton
      label='Cancel'
      primary
      onTouchTap={closeDialog}
    />,
    <FlatButton
      label='Submit'
      primary
      keyboardFocused
    />
  ]

  return (
    <Dialog
      title='Add A New Plate'
      modal={false}
      open={open}
      actions={actions}
      onRequestClose={closeDialog}
    >
      <TextField
        hintText='Name' fullWidth
      /><br />
      <TextField
        hintText='Description' fullWidth rows={4} rowsMax={4} multiLine
      /><br />
    </Dialog>
  )
}
