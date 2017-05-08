import React, { Component } from 'react'

import Cookies from 'js-cookie'
import Header from '../components/Header/Header'
import Navigation from '../components/Navigation/Navigation'
import PropTypes from 'prop-types'
import configureLoadingProgressBar from '../lib/routing'

export default ComposedComponent => {
  return class WithDefaultLayout extends Component {
    static propTypes = {
      auth: PropTypes.object
    }

    componentDidMount() {
      configureLoadingProgressBar()
    }

    render() {
      return (
        <div>
          <Header title="Plate" />
          <Navigation token={Cookies.get('token') || this.props.auth.token} />
          <ComposedComponent {...this.props} />
          <style jsx global>
            {`
               * {
                margin: 0;
                box-sizing: border-box;
              }
              a {
                text-decoration: none;
              }
              body {
                margin-bottom: 0px;
            }
            `}
          </style>
        </div>
      )
    }
  }
}
