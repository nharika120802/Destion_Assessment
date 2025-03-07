import {useNavigate} from 'react-router'

import './index.css'

function Home() {
  const navigate = useNavigate()
  const handleGetStarted = () => {
    navigate('/products')
    console.log('Get Started')
  }
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Welcome to Our Application</h1>
        <p>Manage your invoices and products with ease.</p>
        <button type="button" onClick={handleGetStarted}>Get Started</button>
      </div>

      <div>
        <button type="button" onClick={handleGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Home
