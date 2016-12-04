import * as firebase from 'firebase'

import { Button, Menu } from 'semantic-ui-react'
import { Link, browserHistory } from 'react-router'
import React, { Component } from 'react'

export default class AuthenticatedNav extends Component {
  constructor() {
    super()

    this.state = {
      activeItem: 'home'
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  logout() {
    firebase.auth().signOut().then(() => {
      browserHistory.push('/')
    }, (error) => {
      console.log('Log out failed')
    })
  }

  render() {
    const { activeItem } = this.state
    return (
      <Menu size='tiny' fixed='top' fluid>
        <Menu.Item header>Plate</Menu.Item>
        <Menu.Item name='home' as={Link} to='/' active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item name='dashboard' as={Link} to='/dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick} />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Button primary onClick={this.logout}>Logout</Button>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}
