import PropTypes from 'prop-types'
import React from 'react'

const Card = ({
  children,
  style,
  headerText,
  avatar,
  subheader,
  actionIcon
}) => {
  return (
    <div className="card fluid custom-card" style={style}>
      <div className="header-container">
        {avatar && <img className="avatar" src={avatar} />}
        {headerText && <div className="card-header">{headerText}</div>}
        {actionIcon && <div className="action-icon">{actionIcon}</div>}
      </div>
      {subheader && <div className="sub-header">{subheader}</div>}
      <div className="card-content">
        {children}
      </div>
      <style jsx>{`
        .custom-card {
          border-radius: 6px;
          padding: 10px;
          box-shadow: 0 6px 4px -4px black;
        }
        .avatar {
          margin-right: 10px;
          width: 50px !important;
        }
        .header-container {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .sub-header {
          font-size: 14px;
          margin-top: 5px;
          margin-bottom: 5px;
          color: #888;
        }
        .card-header {
          font-weight: bolder;
          font-size: 20px;
          color: #424242;
        }
        .card-content {
          color: #424242;
          font-size: 14px;
        }
        .action-icon {
          margin-left: auto;
          padding: 5px;
        }
      `}</style>
    </div>
  )
}

Card.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  headerText: PropTypes.string,
  avatar: PropTypes.string,
  subheader: PropTypes.string,
  actionIcon: PropTypes.node
}

export default Card
