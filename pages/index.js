import React, { Component } from 'react'

import Header from '../components/Header/Header'
import HomeContainer from '../containers/HomeContainer'
import { pageWithDefaultLayout } from '../hocs/page'
import withUser from '../hocs/withUser'

class index extends Component {
  render() {
    return (
      <div>
        <Header title="Home" />
        <HomeContainer />
      </div>
    )
  }
}

export default pageWithDefaultLayout(withUser(index))
