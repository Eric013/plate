import React from 'react'
import { render } from 'react-dom'
import { StyleRoot } from 'radium'
import injectTapEventPlugin from 'react-tap-event-plugin'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Register from './Register'

injectTapEventPlugin()

it('renders without crashing', () => {
  const div = document.createElement('div')
  render(
    <MuiThemeProvider muiTheme={getMuiTheme()}>
      <StyleRoot>
        <Register />
      </StyleRoot>
    </MuiThemeProvider>,
  div)
})
