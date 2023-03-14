// Write your JS code here
import {Redirect} from 'react-router-dom'
import {Component} from 'react'

import Cookies from 'js-cookie'

class Login extends Component {
  //   state = {name: 'Rahul', password: 'rahul@2021'}

  onSuccess = jwtToken => {
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    const {history} = this.props
    history.replace('/')
  }

  onClickLogin = async () => {
    // const {name, password} = this.state

    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const apiUrl = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(apiUrl, options)
    console.log(response)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    }
  }

  render() {
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <div>
        <h1>Please Login</h1>
        <div>
          <button type="button" onClick={this.onClickLogin}>
            Login with Sample Creds
          </button>
        </div>
      </div>
    )
  }
}

export default Login
