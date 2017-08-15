import React from 'react'
import { Link } from 'react-router-dom'

import { basePath } from 'utils/constants'

const Home = () => (
  <div>
    <h1>Welcome to Nebula!</h1>
    <div className="c-card">
      <p>Nebula is a multi-tiered ITCSS and BEM based UI toolkit.</p>
      <Link to={`${basePath}get-started`} className="c-btn c-btn--md c-btn--alpha">
        Get Started
      </Link>
    </div>
  </div>
)

export default Home
