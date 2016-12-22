import './index.css'

import * as firebase from 'firebase'

import { Router, browserHistory } from 'react-router'

import React from 'react'
import { render } from 'react-dom'
import routes from './routes/routes'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyDL-jDWSC5lrRfRsngBu2gPTEmL2hO2SXE',
  authDomain: 'plate-a0b1b.firebaseapp.com',
  databaseURL: 'https://plate-a0b1b.firebaseio.com',
  storageBucket: 'plate-a0b1b.appspot.com',
  messagingSenderId: '1011831735527'
}

firebase.initializeApp(config)

render(
  <div>
    <Router history={browserHistory} routes={routes} />
  </div>,
  document.getElementById('root')
)
