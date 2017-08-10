import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div className="c-card">
    <h1>Nebula</h1>
    <Link to="/nebula/get-started" className="c-btn c-btn--md c-btn--alpha">
      Get Started
    </Link>
  </div>
)

export default Home
