import React from 'react'
import T from 'prop-types'
import { Card, FadeIn } from 'nebula-react'

const ComponentToRender = ({ render }) => (
  render
    ? (
      <FadeIn>
        <Card.Wrapper>
          <Card.Body>
            Hello Nebula.
          </Card.Body>
        </Card.Wrapper>
      </FadeIn>
    )
    : (
      <Card.Wrapper>
        <Card.Body>Hello Nebula.</Card.Body>
      </Card.Wrapper>
    )
)

ComponentToRender.propTypes = {
  render: T.bool.isRequired
}

export default ComponentToRender
