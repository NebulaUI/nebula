import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Section } from 'nebula-react'

import { basePath } from 'utils/constants'
import layers from 'assets/img/layers.png'

import CoreConcepts from '../CoreConcepts'

const Home = () => (
  <div>
    <h1>Welcome to Nebula!</h1>
    <Card>
      <p>Nebula is a multi-tiered ITCSS and BEM based UI toolkit.</p>
      <p>It consists of three layers building upon one another as the diagram below illustrates.</p>
      <p>
        <img src={layers} alt="Nebula Layers" style={{ width: '500px' }} />
      </p>
      <p>As a consumer of Nebula you get to choose which layer(s) your project includes.</p>
      <Link to={`${basePath}get-started`} className="c-btn c-btn--md c-btn--alpha">
        Get Started
      </Link>
    </Card>
    <Section size="md">
      <CoreConcepts>
        <h2>Core Concepts</h2>
      </CoreConcepts>
    </Section>
  </div>
)

export default Home
