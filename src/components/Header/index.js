// Write your JS code here
import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <ul className="header-container">
    <li>
      <Link to="/" className="link-item">
        Home
      </Link>
    </li>
    <li>
      <Link to="/about" className="link-item">
        About
      </Link>
    </li>
  </ul>
)

export default Header
