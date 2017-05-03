import Head from 'next/head'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
      />
      <meta name="theme-color" content="#343f53" />
      <meta
        name="apple-mobile-web-app-status-bar-style"
        content="black-translucent"
      />
      <link rel="shortcut icon" href="/static/img/plateLogo.png" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto"
        rel="stylesheet"
      />
      <link href="/static/css/flexboxgrid.css" rel="stylesheet" />
      <link href="/static/css/nprogress.css" rel="stylesheet" />
      <link rel="manifest" href="/static/manifest.json" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      />
    </Head>
  )
}

Header.propTypes = {
  title: PropTypes.string
}

export default Header
