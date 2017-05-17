import Cookies from 'js-cookie'
import PropTypes from 'prop-types'
import React from 'react'
import UpdateProfileMutation from '../../../mutations/UpdateProfileMutation'
import UserProfileQuery from '../../../queries/GetUserProfileQuery'
import { graphql } from 'react-apollo'

const profileUpdate = async (e, id, updateProfile) => {
  e.preventDefault()
  const firstName = document.getElementById('firstName').value
  const lastName = document.getElementById('lastName').value
  const email = document.getElementById('email').value
  await updateProfile(id, firstName, lastName, email)
}

const ProfilePage = ({ user, updateProfile }) => {
  return (
    <form onSubmit={e => profileUpdate(e, user.id, updateProfile)}>
      <fieldset>
        <legend>My Profile</legend>
        <div className="input-group fluid">
          <label className="input-label" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            placeholder="first name"
            defaultValue={user.firstName}
            required
          />
        </div>
        <div className="input-group fluid">
          <label className="input-label" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            placeholder="last name"
            required
            defaultValue={user.lastName}
          />
        </div>
        <div className="input-group fluid">
          <label className="input-label" htmlFor="username">
            Username
          </label>
          <input
            type="text"
            id="username"
            placeholder="username"
            disabled
            defaultValue={user.username}
          />
        </div>
        <div className="input-group fluid">
          <label className="input-label" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="email"
            disabled
            defaultValue={user.email}
          />
        </div>
      </fieldset>
      <style jsx>{`
        .input-label {
          width: 100px;
        }
      `}</style>
    </form>
  )
}

ProfilePage.propTypes = {
  user: PropTypes.object,
  updateProfile: PropTypes.func
}

export default graphql(UpdateProfileMutation, {
  props: ({ mutate }) => ({
    updateProfile: (id, firstName, lastName, email) => {
      return mutate({
        variables: { id, firstName, lastName, email },
        optimisticResponse: {
          __typename: 'Mutation',
          updateProfile: {
            __typename: 'User',
            id,
            firstName,
            lastName,
            email
          }
        }
      })
    }
  }),
  options: props => ({
    refetchQueries: [
      {
        query: UserProfileQuery,
        variables: { token: Cookies.get('token') }
      }
    ]
  })
})(ProfilePage)
