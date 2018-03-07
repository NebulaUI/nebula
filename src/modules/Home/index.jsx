import React from 'react'
import { Link } from 'react-router-dom'
import { Card, Section, SiteWrap } from 'nebula-react'

import { BASE_PATH } from 'constants/index'
import layers from 'assets/img/layers.png'
import MarkdownContainer from 'components/MarkdownContainer'

import CoreConcepts from '../CoreConcepts'
import aboveLayers from './aboveLayers.md'
import belowLayers from './belowLayers.md'

const Home = () => (
  <Section size="md">
    <SiteWrap padding>
      <h1><img src={'/src/assets/img/nebula-logo.svg'} alt={'Nebula'} style={{ maxWidth: '150px', height: 'auto', verticalAlign: 'middle' }} /></h1>
      <Card.Wrapper className="u-nebula-bg">
        <Card.Body>
          <MarkdownContainer source={aboveLayers} />
          <p>
            <img src={layers} alt={'Nebula Layers'} style={{ width: '500px' }} />
          </p>
          <MarkdownContainer source={belowLayers} />
          <Link to={`${BASE_PATH}get-started`} className="c-btn c-btn--md c-btn--alpha">
            <img src={'/src/assets/icons/nebula-icon.svg'} alt={'Nebula'} style={{ marginRight: '0.7rem', width: '25px', height: 'auto', verticalAlign: 'middle' }} />
            <span style={{ verticalAlign: 'middle' }}>Get started!</span>
          </Link>
        </Card.Body>
      </Card.Wrapper>
    </SiteWrap>
    <CoreConcepts>
      <h2>Core Concepts</h2>
    </CoreConcepts>
  </Section>
)

export default Home
