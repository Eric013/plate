import {
  Arrow,
  Dropdown,
  DropdownMenu,
  Fixed,
  NavItem,
  Space,
  Toolbar,
} from 'rebass'
import React, { Component } from 'react'

import { Link } from 'react-router'

export default class AuthenticatedNav extends Component {
  constructor() {
    super()

    this.state = {
      dropdownOpen: false
    }
  }

  toggleDropdown() {
    if (this.state.dropdownOpen === false) {
      this.setState({
        dropdownOpen: true
      })
    } else {
      this.setState({
        dropdownOpen: false
      })
    }
  }

  render() {
    const navColor = {
      backgroundColor: '#3F51B5',
      color: 'white'
    }

    return (
      <Fixed top left right zIndex={1}>
        <Toolbar style={navColor}>
          <NavItem is={Link} to='/'>
            Plate
          </NavItem>
          <Space
            auto
            x={1}
            />
          <NavItem>
            <Dropdown
              onClick={this.toggleDropdown.bind(this)}
              >
              Login/Register
              <Arrow direction='down' />
              <DropdownMenu
                open={this.state.dropdownOpen}
                right
                onDismiss={this.toggleDropdown.bind(this)}
                >
                <NavItem is={Link} to='/login'>
                  Login
                </NavItem>
                <NavItem is={Link} to='/register'>
                  Register
                </NavItem>
              </DropdownMenu>
            </Dropdown>
          </NavItem>
        </Toolbar>
      </Fixed>
    )
  }
}
