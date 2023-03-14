// Write your JS code here
import Cookies from 'js-cookie'

import Header from '../Header'
import LogoutButton from '../LogoutButton'

const About = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <div>
      <Header />
      <div>
        <h1>About Route</h1>
        <LogoutButton onClickLogout={onClickLogout} />
      </div>
    </div>
  )
}
export default About
