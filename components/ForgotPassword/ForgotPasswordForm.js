import { Field, reduxForm } from 'redux-form'

import BorderedButton from '../BorderedButton/BorderedButton'
import ForgotPasswordValidation
  from '../../validations/ForgotPasswordValidation'
import PropTypes from 'prop-types'
import React from 'react'
import RenderWhiteTextField from '../../utils/RenderWhiteTextField'

const forgotPassword = e => {
  e.preventDefault()
  console.log('submitted')
}

const ForgotPasswordForm = ({ handleSubmit }) => {
  return (
    <div className="container-fluid">
      <div className="row full-height middle-xs middle-sm middle-md middle-lg center-xs center-sm center-md center-lg">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
          <h1 className="header-text">Forgot Password</h1>
          <form onSubmit={handleSubmit(forgotPassword)}>
            <div className="text-field-email">
              <Field
                name="email"
                id="email"
                component={RenderWhiteTextField}
                type="email"
                label="Email"
              />
            </div>
            <BorderedButton
              color="white"
              type="submit"
              label="Forgot Password"
            />
          </form>
        </div>
      </div>
      <style jsx>
        {`
          .full-height {
            height: 90vh;
          }
          .text-field-email {
            margin-bottom: 15px;
          }
          .header-text {
            color: white;
            margin-bottom: 50px;
          }
        `}
      </style>
    </div>
  )
}

ForgotPasswordForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default reduxForm({
  form: 'forgotPasswordForm',
  validate: ForgotPasswordValidation
})(ForgotPasswordForm)
