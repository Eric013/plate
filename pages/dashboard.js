import React, { Component } from 'react'

import Cookies from 'js-cookie'
import Dashboard from '../views/Dashboard'
import PropTypes from 'prop-types'
import Unauthorized from '../components/Unauthorized/Unauthorized'
import { pageWithUserData } from '../hocs/page'

export default pageWithUserData(
  class extends Component {
    static propTypes = {
      getUserProfile: PropTypes.object
    }

    render() {
      const { getUserProfile } = this.props

      if (getUserProfile === null) {
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

      return <Dashboard user={getUserProfile} />
    }
  }
)
