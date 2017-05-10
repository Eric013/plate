import ErrorIcon from 'material-ui/svg-icons/alert/error'
import IconButton from 'material-ui/IconButton'
import React from 'react'
import { red500 } from 'material-ui/styles/colors'

const styles = {
  largeIcon: {
    width: 80,
    height: 80,
    color: red500
  },
  large: {
    width: 120,
    height: 120,
    padding: 20
  }
}

const NoPlatesFound = () => {
  return (
    <Card style={{ borderRadius: 10, textAlign: 'center' }}>
      <IconButton iconStyle={styles.largeIcon} style={styles.large}>
        <ErrorIcon />
      </IconButton>
      <br />
      <div className="content">
        You currently have nothing on your dashboard. Add a new plate to get started
      </div>
      <style jsx>
        {`
          .content {
            font-size: 20px;
            font-weight: bolder;
          }
        `}
      </style>
    </Card>
  )
}

export default NoPlatesFound
