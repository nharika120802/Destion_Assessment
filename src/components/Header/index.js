import {Link, useNavigate} from 'react-router-dom'
import './index.css'

const Header = () => {
  const navigate = useNavigate()
  const onClickHeaderName = () => {
    navigate('/')
  }
  return (
    <nav>
      <h1 onClick={onClickHeaderName}>Invoices and Product Manager</h1>
      <ul>
        <li>
          <Link to="/" className="link-item">
            <p>Home</p>
          </Link>
        </li>

        <li>
          <Link to="/products" className="link-item">
            <p>Product Management</p>
          </Link>
        </li>
        <li>
          <Link to="/invoices" className="link-item">
            <p>Invoice Portal</p>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
