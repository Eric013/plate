import Banner from '../components/Banner/Banner'
import { Component } from 'react'
import Layout from '../components/Layout/Layout'
import { Provider } from 'react-redux'
import { initStore } from '../redux/createStore'
import rootReducer from '../redux/rootReducer'

export default class extends Component {
  static getInitialProps ({ req }) {
    const isServer = !!req
    const store = initStore(rootReducer, {}, isServer)
    return { initialState: store.getState(), isServer }
  }

  constructor (props) {
    super(props)
    this.store = initStore(rootReducer, props.initialState, props.isServer)
  }

  render () {
    return (
      <Provider store={this.store}>
        <Layout>
          <Banner />
        </Layout>
      </Provider>
    )
  }
}
