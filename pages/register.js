import { Component } from 'react'
import Head from 'next/head'
import Layout from '../modules/layout/Layout'
import Register from '../modules/register/Register'

export default class extends Component {
  static async getInitialProps({ req }) {
    return req
      ? { userAgent: req.headers['user-agent'] }
      : { userAgent: navigator.userAgent }
  }

  render() {
    return (
      <Layout userAgent={this.props.userAgent}>
        <Register />
      </Layout>
    )
  }
}