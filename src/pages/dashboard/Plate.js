import { Button, Card, Confirm, Icon } from 'semantic-ui-react'
import React, { Component, PropTypes } from 'react'

export default class Plate extends Component {
  static propTypes = {
    plate: PropTypes.object,
    removePlate: PropTypes.func
  }

  constructor(props) {
    super(props)

    this.state = {
      open: false
    }
  }

  washPlate = () => {
    this.setState({
      open: true
    })
  }

  handleConfirm = () => {
    this.setState({
      open: false
    })

    this.props.removePlate(this.props.plate.id)
  }

  handleCancel = () => {
    this.setState({
      open: false
    })
  }

  render() {
    return (
      <Card style={{ width: '100%' }}>
        <Card.Content>
          <Icon size='big' name='food' style={{ float: 'right' }} />
          <Card.Header>
            {this.props.plate.plateName}
          </Card.Header>
          <Card.Meta>
            {Date()}
          </Card.Meta>
          <Card.Description>
            {this.props.plate.plateDescription}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className='ui two buttons'>
            <Button basic color='green'>Fill</Button>
            <Button basic color='red' onClick={this.washPlate}>Wash</Button>
          </div>
        </Card.Content>
        <Confirm
          open={this.state.open}
          onCancel={this.handleCancel}
          onConfirm={this.handleConfirm}
          content='Are you sure you want to wash this plate? All data will be lost and is not recoverable!'
          cancelButton='Leave It Dirty'
          confirmButton='Wash It'
        />
      </Card>
    )
  }
}
