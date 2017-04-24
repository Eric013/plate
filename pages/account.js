import React, { Component } from 'react'

import AccountContainer from '../containers/AccountContainer'
import Cookies from 'js-cookie'
import PropTypes from 'prop-types'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import { pageWithDefaultLayout } from '../hocs/page'
import withUser from '../hocs/withUser'

class account extends Component {
  static propTypes = {
    getUserProfile: PropTypes.object
  }

  render() {
    if (this.props.getUserProfile === null) {
      return (
        <div>
          <Unauthorized />
        </div>
      )
    }

    if (!Cookies.get('token')) {
      return (
        <div>
          <Unauthorized />
        </div>
      )
    }

    return (
      <div>
        <AccountContainer />
      </div>
    )
  }
}

export default pageWithDefaultLayout(withUser(account))
