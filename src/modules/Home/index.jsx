import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Section } from 'nebula-react'

import { BASE_PATH } from 'constants/index'
import layers from 'assets/img/layers.png'
import MarkdownContainer from 'components/MarkdownContainer'

import CoreConcepts from '../CoreConcepts'
import aboveLayers from './aboveLayers.md'
import belowLayers from './belowLayers.md'

const Home = () => (
  <div>
    <h1><span role="img" aria-label="star" style={{ color: 'transparent', textShadow: '0 0 0 #242424' }}>💫</span> Welcome to Nebula!</h1>
    <Card>
      <MarkdownContainer source={aboveLayers} />
      <p>
        <img src={layers} alt="Nebula Layers" style={{ width: '500px' }} />
      </p>
      <MarkdownContainer source={belowLayers} />
      <Link to={`${BASE_PATH}get-started`} className="c-btn c-btn--md c-btn--alpha">
        <span role="img" aria-label="star" style={{ color: 'transparent', textShadow: '0 0 0 white', marginRight: '0.5rem' }}>💫</span>Get started!
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
