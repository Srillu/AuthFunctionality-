// Write your JS code here
const LogoutButton = props => {
  const {onClickLogout} = props

  const onClickLogoutButton = () => {
    onClickLogout()
  }

  return (
    <div>
      <button type="button" onClick={onClickLogoutButton}>
        Logout
      </button>
    </div>
  )
}

export default LogoutButton
