import { Button, Divider, Form, Grid, Icon, Message } from 'semantic-ui-react'
import { inject, observer } from 'mobx-react'

import { Component } from 'react'
import Router from 'next/router'
import { auth } from '../../lib/db'
import firebase from 'firebase'

@inject('store') @observer
export default class extends Component {

  login = (e) => {
    e.preventDefault()

    const email = document.getElementById('email').value
    const password = document.getElementById('password').value

    const promise = auth.signInWithEmailAndPassword(email, password)

    promise
      .then(() => Router.push('/dashboard'))
      .catch(() => {
        this.props.store.showLoginMessage()
      })
  }

  loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()

    const promise = auth.signInWithPopup(provider)

    promise
      .then(() => Router.push('/dashboard'))
  }

  loginWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider()

    const promise = auth.signInWithPopup(provider)

    promise
      .then(() => Router.push('/dashboard'))
  }

  render() {
    return (
      <div>
        <Message
          floating='true'
          negative='true'
          visible={this.props.store.loginMessage}
          hidden={this.props.store.loginMessageHidden}
          onDismiss={this.props.store.hideLoginMessage}
          header='Are you sure you are registered?'
          content='We did not seem to find an account with that email'
          style={{marginTop: '40px', marginBottom: '10px'}}
        />
        <div className='login-form'>
          <Grid centered>
            <Grid.Row>
              <Grid.Column computer={8} tablet={16} mobile={16}>
                <h3>Login Into Your Account</h3>
                <Form onSubmit={this.login}>
                  <Form.Field>
                    <input type='text' name='email' id='email' placeholder='email' required />
                  </Form.Field>
                  <Form.Field>
                    <input type='password' name='password' id='password' placeholder='password' required />
                  </Form.Field>
                  <Button type='submit' primary>Login</Button>
                  <p><a href='#' className='link'>Forgot Password?</a></p>
                </Form>
              </Grid.Column>
              <Grid.Column computer={1} only='computer'>
                <Divider vertical>or</Divider>
              </Grid.Column>
              <Grid.Column computer={7} mobile={16}>
                <div className='buttons'>
                  <Button color='facebook' onClick={this.loginWithFacebook} style={{marginBottom: '15px', width: '300px'}}>
                    <Icon name='facebook' /> Sign in with Facebook
                  </Button>
                  <br />
                  <Button color='google plus' onClick={this.loginWithGoogle} style={{marginBottom: '15px', width: '300px'}}>
                    <Icon name='google plus' /> Sign in with Google Plus
                  </Button>
                  <br />
                  <Button color='twitter' style={{width: '300px'}}>
                    <Icon name='twitter' /> Sign in with Twitter
                  </Button>
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <style jsx>{`
            .login-form {
              background-color: #F7F7F7;
              border-radius: 10px;
              padding: 50px;
              margin-top: 50px;
              width: 100%;
              display: flex;
              justify-content: center;
            }
            .link {
              margin-top: 10px;
              padding-top: 10px;
            }
            .buttons {
              margin-top: 50px;
            }
          `}</style>
        </div>
      </div>
    )
  }
}
