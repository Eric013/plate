import { Field, reduxForm } from 'redux-form'
import React, { Component } from 'react'
import { compose, graphql } from 'react-apollo'

import AddPlateMutation from '../../mutations/AddPlateMutation'
import AddPlateValidation from '../../validations/AddPlateValidation'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import PlatesQuery from '../../queries/PlatesQuery'
import PropTypes from 'prop-types'
import RenderRegularTextField from '../../utils/RenderRegularTextField'

class AddPlateDialog extends Component {
  static propTypes = {
    open: PropTypes.bool,
    closeDialog: PropTypes.func,
    addPlate: PropTypes.func,
    handleSubmit: PropTypes.func,
    reset: PropTypes.func,
    user: PropTypes.object
  }

  confirmAddPlate = () => {
    const plateName = document.getElementById('add_plate_name').value
    const plateDescription = document.getElementById('add_plate_description')
      .value

    const plateColors = [
      '/static/img/taskIcon/taskIconBlue.png',
      '/static/img/taskIcon/taskIconGreen.png',
      '/static/img/taskIcon/taskIconOrange.png',
      '/static/img/taskIcon/taskIconPink.png',
      '/static/img/taskIcon/taskIconRed.png',
      '/static/img/taskIcon/taskIconYellow.png'
    ]

    const colorNumber = Math.floor(Math.random() * 6)

    this.props.addPlate(
      plateName,
      plateDescription,
      plateColors[colorNumber],
      this.props.user.username
    )
    this.props.closeDialog()
    this.props.reset()
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        type="button"
        secondary
        onTouchTap={this.props.closeDialog}
      />,
      <FlatButton label="Add Plate" form="plateForm" primary type="submit" />
    ]

    return (
      <Dialog
        title="Add A New Plate"
        modal={false}
        open={this.props.open}
        actions={actions}
        onRequestClose={this.props.closeDialog}
        contentStyle={{ width: '95%' }}
      >
        <form
          id="plateForm"
          onSubmit={this.props.handleSubmit(() => this.confirmAddPlate())}
        >
          <Field
            name="name"
            id="add_plate_name"
            component={RenderRegularTextField}
            type="text"
            label="Name"
          />
          <Field
            name="description"
            id="add_plate_description"
            component={RenderRegularTextField}
            type="text"
            label="Description"
            rows={4}
            rowsMax={4}
            multiLine
          />
        </form>
      </Dialog>
    )
  }
}

export default compose(
  reduxForm({
    form: 'addPlateForm',
    validate: AddPlateValidation
  }),
  graphql(AddPlateMutation, {
    props: ({ mutate }) => ({
      addPlate: (name, description, thumbnail, createdBy) =>
        mutate({ variables: { name, description, thumbnail, createdBy } })
    }),
    options: props => ({
      refetchQueries: [
        {
          query: PlatesQuery,
          variables: { username: props.user.username }
        }
      ]
    })
  })
)(AddPlateDialog)
